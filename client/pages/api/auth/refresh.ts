import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import jwt from "jsonwebtoken";
import {
    generateAccessToken,
    generateRefreshToken,
} from "../../../utils/auth/token";
import Token from "../../../model/token";

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
    //take the refresh token from the user
    const refreshToken = req.body.token;
    try {
        await dbConnect();

        //send error if there is no token or it's invalid
        if (!refreshToken)
            return res
                .status(401)
                .json({ error: "You are not authenticated!" });

        //check if the entered email is valid
        const token = await Token.findOne({ token: refreshToken });
        if (!token) {
            return res
                .status(403)
                .json({ error: "Refresh token is not valid!" });
        }

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err: any, user: any) => {
                err && console.log(err);

                Token.deleteOne({ token: refreshToken });

                const newAccessToken = generateAccessToken(user);
                const newRefreshToken = generateRefreshToken(user);

                const newToken = new Token({ token: newRefreshToken });
                newToken.save();

                res.status(200).json({
                    data: {
                        accessToken: newAccessToken,
                        refreshToken: newRefreshToken,
                    },
                });
            }
        );
    } catch (err: any) {
        return { error: "error on user loggin" };
    }
}
