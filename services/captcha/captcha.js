"use server"
export async function verifyCaptcha(token) {
    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_KEY_RECAPTCHA_SECRET}&response=${token}`, {
        method: "POST",
    });
    const data = await res.json();
    if(data.success) {
        return "success!";
    } else {
        throw new Error('Failed Captcha');
    }
}