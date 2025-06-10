import GisPageClient, { Region } from "./GisPageClient";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getAvailableRegions(token: string): Promise<Region[]> {
  try {
    const regions = await api.get<Region[]>(
      "https://api.citizens.asicsoft.ru/api/Region/AvailableRegions",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      },
    );
    return regions;
  } catch (error) {
    console.error("Failed to fetch available regions:", error);
    return [];
  }
}

export default async function GISPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    redirect("/login");
  }

  const availableRegions = await getAvailableRegions(token);

  return <GisPageClient availableRegions={availableRegions} />;
}
