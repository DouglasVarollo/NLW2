import jwt from "jsonwebtoken";

interface TokenPayload {
  id: number;
}

export default function generateToken(payload: TokenPayload) {
  return jwt.sign(payload, "secret", {
    expiresIn: "1d",
  });
}
