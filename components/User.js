"use client";
import { auth } from "@/libs/firebase";

import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import SignIn from "@/components/pages/contact/SignIn";
import { deleteUser } from "firebase/auth";

function User() {
  return (
    <>
      {auth.currentUser ? (
        <Link href="/contact" className="button-link">
          <CustomButton>Send Message</CustomButton>
        </Link>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default User;
