"use client";
import UserContextProvider, { UserContext } from "@/context/user-context";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Loading from "../loading";

function AuthenticateUser({ children }) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
        if (Object.keys(user).length === 0) {
          // Jika `user` tidak ada, alihkan ke halaman utama
          return;
        } else if (
          user.currentUser?.uid !== process.env.NEXT_PUBLIC_UID_AUTHORIZED &&
          user.currentUser?.email !== process.env.NEXT_PUBLIC_EMAIL_AUTHORIZED
        ) {
          // Jika `user` tidak memiliki hak akses, alihkan ke halaman utama
          router.push("/");
        } else {
          setIsClient(true);
        }
    
  }, [user, router]);

  if (!isClient) {
    return <Loading/>;
  }
  return children;
}

function AdministratorProvider({ children }) {
  return (
    <UserContextProvider>
      <AuthenticateUser>{children}</AuthenticateUser>
    </UserContextProvider>
  );
}

export default function AdministratorLayout({ children }) {
  return <AdministratorProvider>{children}</AdministratorProvider>;
}
