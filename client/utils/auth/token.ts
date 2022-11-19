import jwt from "jsonwebtoken";

export function generateAccessToken(user: any): string {
    return jwt.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30min",
    });
}

export function generateRefreshToken(user: any): string {
    return jwt.sign({ user: user }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "30d",
    });
}
