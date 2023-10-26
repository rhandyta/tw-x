import {signInWithPopup, getAdditionalUserInfo} from 'firebase/auth'

signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(getAdditionalUserInfo(result));
        console.log({
            token, user
        })
    }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(result);
        console.log({
            errorCode,
            errorMessage,
            email,
            credential
        })
    })