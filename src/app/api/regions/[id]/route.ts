import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

// --- HANDLER FOR GETTING ONE REGION ---
// I think we don`t have this type of request in the app, but I add it for example
export async function GET(request: NextRequest, { params }: RequestContext) {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) {
    return new NextResponse("Authentication required", { status: 401 });
  }

  const { id } = params; // Get the ID from the URL

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
// I think we don`t have this type of request in the app, but I add it for example
export async function DELETE(request: NextRequest, { params }: RequestContext) {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) {
    return new NextResponse("Authentication required", { status: 401 });
  }

  const { id } = params; // Get the ID from the URL

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
