"use client";
import { auth } from "@/libs/firebase";
import CustomButton from "@/components/CustomButton";
import SignIn from "@/components/pages/guestbook/SignIn";
import { deleteUser } from "firebase/auth";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function User() {
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();


  

  function logoutHandler() {
  //   deleteUser(auth.currentUser)
  //     .then(() => {
  //       router.refresh();
  //     })
  //     .catch((error) => {
  //       //
  //     });

    auth.currentUser.delete().catch(function(error) {
      if (error.code == 'auth/requires-recent-login') {
        // The user's credential is too old. She needs to sign in again.
        auth.signOut().then(function() {
          // The timeout allows the message to be displayed after the UI has
          // changed to the signed out state.
          setTimeout(function() {
            alert('Please sign in again to delete your account.');
          }, 1);
        });
      }
    });
  

  }

  


  useEffect(() => {
    setIsClient(true);
  }, []);


  if (!isClient) return false;


  return (
    <>
      {auth.currentUser ? (
        <Stack justifyContent="center" width="100%" rowGap={2}>
          <CustomButton onClick={logoutHandler}>Logout</CustomButton>
        </Stack>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default User;
