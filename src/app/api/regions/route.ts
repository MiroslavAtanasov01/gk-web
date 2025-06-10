import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return new NextResponse("Authentication required", { status: 401 });
  }

  try {
    const newRegionData = await request.json();
    const beResponse = await fetch(
      "https://api.citizens.asicsoft.ru/api/Region",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newRegionData),
      },
    );

    if (!beResponse.ok) {
      const errorText = await beResponse.text();
      return new NextResponse(errorText, { status: beResponse.status });
    }

    const createdRegion = await beResponse.json();

    return NextResponse.json(createdRegion, { status: 201 });
  } catch (error) {
    console.error("[API Regions POST] Error:", error);
    return new NextResponse("An internal server error occurred", {
      status: 500,
    });
  }
}
