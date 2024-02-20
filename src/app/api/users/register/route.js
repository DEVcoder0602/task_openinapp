import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

dbConnect();

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { message: "User already present" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
