import bcrypt from "bcryptjs";
import { Request, Response } from "express";

import db from "../database/connection";
import generateToken from "../utils/generateToken";

export default class UsersController {
  async create(request: Request, response: Response) {
    const { first_name, last_name, email, password } = request.body;

    const userAlreadyExists = await db("users")
      .where("email", "=", email)
      .first();

    if (userAlreadyExists) {
      return response.status(400).json({
        error: "User already exists",
      });
    }

    const [user_id] = await db("users").insert({
      first_name,
      last_name,
      email,
      password_hash: await bcrypt.hash(password, 8),
    });

    const insertedUser = await db("users")
      .select("id", "first_name", "last_name", "email", "avatar_url")
      .where("id", "=", user_id);

    const token = generateToken({
      id: user_id,
    });

    return response.status(201).json({
      user: insertedUser,
      token,
    });
  }
}
