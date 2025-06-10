import { NextResponse } from "next/server";
import { cookies } from "next/headers";

async function getUserByToken(token: string) {
  try {
    const backendProfileUrl = "https://api.citizens.asicsoft.ru/api/Operator";

    const beResponse = await fetch(backendProfileUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Accept-Language": "en-US",
      },
    });

    if (!beResponse.ok) {
      return null;
    }

    return beResponse.json();
  } catch (error) {
    console.error("[API Me] Error calling backend for validation:", error);
    return null;
  }
}

export async function GET() {
  const tokenCookie = (await cookies()).get("auth_token");

  if (!tokenCookie) {
    return new NextResponse(JSON.stringify({ error: "Not authenticated" }), {
      status: 401,
    });
  }

  const token = tokenCookie.value;
  const user = await getUserByToken(token);

  if (!user) {
    // The token was invalid or expired. Clear the cookie.
    (await cookies()).set("auth_token", "", { maxAge: 0 });
    return new NextResponse(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
    });
  }

  // Forward the user object from the backend to our client
  return NextResponse.json({ user });
}
