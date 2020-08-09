import bcrypt from "bcryptjs";
import { Request, Response } from "express";

import db from "../database/connection";
import generateToken from "../utils/generateToken";

export default class SessionsController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await db("users").where("email", "=", email).first();

    if (user) {
      const matchedPassword = await bcrypt.compare(
        password,
        user.password_hash
      );

      if (matchedPassword) {
        const token = generateToken({
          id: user.id,
        });

        return response.json({
          token,
        });
      }
    }

    return response.status(401).json({
      error: "Incorrect email or password",
    });
  }
}
