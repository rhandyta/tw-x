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
    deleteUser(auth.currentUser)
      .then(() => {
        router.refresh();
      })
      .catch((error) => {
        //
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
