import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: number;
}

export default function verifyToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(400).json({
      error: "Token is missing",
    });
  }

  try {
    const token = authorization.split("Bearer")[1].trim();
    const decodedToken = jwt.verify(token, "secret") as DecodedToken;

    request.user = {
      id: decodedToken.id,
    };

    return next();
  } catch (err) {
    return response.status(401).json({ error: "Token is invalid" });
  }
}
