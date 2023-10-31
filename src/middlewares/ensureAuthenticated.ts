import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated (request: Request, response:Response, next: NextFunction) {
    const authToken = request.headers.authorization

    if (!authToken) {   
        return response.status(401).json({
            error: "Unauthorized"
        })
    }

    const [, token] = authToken.split(" ")

    try {
        verify(token, "7c9025f1-dbef-4aba-b816-40ad7c5a6d59")
        return next()
    } catch (err) {
        return response.status(401).json({
            message: "Token invalid"
        })
    }

}