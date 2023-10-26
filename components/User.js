"use client";
import { auth } from "@/libs/firebase";

import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import SignIn from "@/components/pages/contact/SignIn";
import { deleteUser } from "firebase/auth";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

function User() {
    
    const router = useRouter()

    function logoutHandler() {
        deleteUser(auth.currentUser).then(() => {
            router.refresh()
          }).catch((error) => {
            // 
          });
    }

  return (
    <>
      {auth.currentUser ? (
        <Stack justifyContent="center" width="100%" rowGap={2}>
          <Link href="/contact" className="button-link">
            <CustomButton>Send Message</CustomButton>
          </Link>
          <CustomButton onClick={logoutHandler}>Logout</CustomButton>
        </Stack>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default User;
