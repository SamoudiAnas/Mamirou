import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            type: "credentials",
            credentials: {},
            authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                return {};
            },
        }),
    ],

    pages: {
        signIn: "/login",
        newUser: "/signup",
    },

    debug: process.env.NODE_ENV === "development",

    adapter: MongoDBAdapter(clientPromise),
};
export default NextAuth(authOptions);

///
