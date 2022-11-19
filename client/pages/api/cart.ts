import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../model/user";
import { verify } from "jsonwebtoken";

interface ResponseData {
    error?: string;
    msg?: string;
}

const authenticateToken =
    (fn: NextApiHandler) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (token == null)
            return res.status(401).send({ error: "Unautheticated!" });

        verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
            if (err) return res.send(403);
            else {
                console.log(user);
                return await fn(req, res);
            }
        });
    };

export default authenticateToken(async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    switch (req.method) {
        case "POST":
            //add new item to cart
            try {
                const { email, cartItems } = req.body;
                console.log(cartItems);
                await dbConnect();
                const user = await User.findOne({ email: email });
            } catch (err: any) {
                return {
                    error: "error has occured while adding a product to the cart",
                };
            }
            break;

        case "GET":
            //add new item to cart
            try {
            } catch (err: any) {
                return {
                    error: "error has occured while adding a product to the cart",
                };
            }
            break;
        default:
            return res
                .status(200)
                .json({ error: "This API call only accepts POST,GET methods" });
    }
});
