"use client"
import { auth, provider } from "@/libs/firebase";
import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignIn() {

    const onLoginHandler = () => {
        signInWithPopup(auth, provider)
            .then( async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;

                await fetch('/api/login', {
                    method: "POST",
                    body: JSON.stringify({
                        token,
                        user
                    })
                })

                console.log({user, token})
                
            }).catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                const email = err.customData.emai;
                const credential = GoogleAuthProvider.credentialFromError(err)

                console.log({errorCode, errorMessage, email, credential})
            });
    }

  return (
    <Button
      variant="outlined"
      startIcon={<Google />}
      onClick={() => onLoginHandler()}
      sx={{
        display: "inline-flex",
        width: "100%",
      }}
    >
      Sign in Google
    </Button>
  );
}

export default SignIn;
