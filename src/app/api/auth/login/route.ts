import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const beResponse = await fetch(
      "https://api.citizens.asicsoft.ru/api/Operator/Authorization",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      },
    );

    if (!beResponse.ok) {
      return new NextResponse("Invalid username or password", {
        status: beResponse.status,
      });
    }

    const beData = await beResponse.json();
    const accessToken = beData?.accessToken;

    const accessTokenExpires = beData?.accessTokenExpires;
    const expiresDate = new Date(accessTokenExpires);
    const maxAge = Math.floor((expiresDate.getTime() - Date.now()) / 1000);

    // const isAddingNewRegion = beData?.isAddingNewRegion;

    if (!accessToken) {
      return new NextResponse("Token not provided by backend", { status: 500 });
    }

    (await cookies()).set("auth_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge,
      path: "/",
      sameSite: "lax",
    });

    return NextResponse.json({ accessToken }, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("An internal server error occurred", {
      status: 500,
    });
  }
}
