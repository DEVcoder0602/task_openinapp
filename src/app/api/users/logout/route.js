import { NextResponse } from "next/server";

export async function POST(request) {
  const response = NextResponse.json(
    {
      message: "Logout successful",
      success: true,
    },
    {
      status: 200,
    }
  );

  response.cookies.set("token", "", {
    httpOnly: true,
    maxAge: 0,
  });

  return response;
}
