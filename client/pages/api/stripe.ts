// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Data = {
    url: string;
};

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        try {
            console.log(req.body);
            // Create Checkout Sessions from body params.
            const params = {
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],
                billing_address_collection: "auto",
                shipping_options: [
                    { shipping_rate: "shr_1LpVcpDZJYiM516gRKCq7OFw" },
                    { shipping_rate: "shr_1LpVegDZJYiM516gcc374gOR" },
                ],
                line_items: [
                    {
                        price: "price_1LpXKLDZJYiM516gH1WR9RlM",
                        quantity: 1,
                    },
                ],
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            };

            const session = await stripe.checkout.sessions.create(params);
            NextResponse.redirect(session.url);
            return res.json({ url: session.url });
        } catch (err: any) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
