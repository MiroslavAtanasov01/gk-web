import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// --- HANDLER FOR GETTING ONE REGION ---
export async function GET(request: NextRequest) {
  // --- NEW WAY TO GET THE ID ---
  // We get the full URL from the request object.
  const url = new URL(request.url);
  // The pathname will be something like '/api/regions/123'
  // We split it by '/' and take the last part.
  const id = url.pathname.split("/").pop();

  if (!id) {
    return new NextResponse("Region ID is missing in the URL", { status: 400 });
  }

  const token = (await cookies()).get("auth_token")?.value;

  if (!token) {
    return new NextResponse("Authentication required", { status: 401 });
  }

  try {
    const beResponse = await fetch(
      `https://api.citizens.asicsoft.ru/api/Region/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!beResponse.ok) {
      const errorText = await beResponse.text();
      return new NextResponse(errorText, { status: beResponse.status });
    }

    const region = await beResponse.json();
    return NextResponse.json(region);
  } catch (error) {
    console.error(`[API Region GET ${id}] Error:`, error);
    return new NextResponse("An internal server error occurred", {
      status: 500,
    });
  }
}

// --- HANDLER FOR DELETING ONE REGION ---
export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return new NextResponse("Region ID is missing in the URL", { status: 400 });
  }

  const token = (await cookies()).get("auth_token")?.value;
  if (!token) {
    return new NextResponse("Authentication required", { status: 401 });
  }

  try {
    const beResponse = await fetch(
      `https://api.citizens.asicsoft.ru/api/Region/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!beResponse.ok) {
      const errorText = await beResponse.text();
      return new NextResponse(errorText, { status: beResponse.status });
    }

    return NextResponse.json({
      message: `Region with ID ${id} deleted successfully.`,
    });
  } catch (error) {
    console.error(`[API Region DELETE ${id}] Error:`, error);
    return new NextResponse("An internal server error occurred", {
      status: 500,
    });
  }
}
