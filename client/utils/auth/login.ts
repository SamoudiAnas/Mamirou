import { signIn } from "next-auth/react";

export default async function login(email: string, password: string) {
    const res: any = signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
        callbackUrl: window.location.origin,
    });

    return res;
}
