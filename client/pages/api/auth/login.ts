import {
    generateAccessToken,
    generateRefreshToken,
} from "../../../utils/auth/token";
import bcrypt from "bcrypt";
import User from "../../../model/user";
import Token from "../../../model/token";
import dbConnect from "../../../lib/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
    error?: string;
    msg?: string;
    data?: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    // validate if it is a POST
    if (req.method !== "POST") {
        return res
            .status(200)
            .json({ error: "This API call only accepts POST methods" });
    }
    const { email, password } = req.body;

    try {
        await dbConnect();
        //check if the entered email is valid
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(500).json({ error: "User does not exist!" });
        }

        try {
            //compare the entered password to the user's password
            await bcrypt.compare(password, user.hashedPassword);
        } catch (err) {
            res.status(500);
            throw new Error("Password is incorrect!");
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        const token = new Token({
            JWT: refreshToken,
        });

        token
            .save()
            .then(() => res.status(200).json({ msg: "Added refresh token" }))
            .catch((err: string) =>
                res.status(400).json({ error: "Error on '/api/login': " + err })
            );

        res.json({
            data: {
                accessToken: accessToken,
                refreshToken: refreshToken,
            },
        });
    } catch (err: any) {
        return { error: "error on user loggin" };
    }
}
