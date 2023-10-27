"use client";
import { auth } from "@/libs/firebase";
import CustomButton from "@/components/CustomButton";
import SignIn from "@/components/pages/guestbook/SignIn";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function User() {
  const [isClient, setIsClient] = useState(false);
  const [user, setUser]= useState(null)
  const router = useRouter();

  function logoutHandler() {
    auth
      .signOut()
      .then(function () {
        router.refresh();
      })
      .catch(function (error) {
        router.refresh();
      });
  }

  useEffect(() => {
    setIsClient(true);

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser); // Mengatur informasi pengguna sesuai status otentikasi
    });

    return () => unsubscribe(); // Berhenti mendengarkan saat komponen dilepas
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
