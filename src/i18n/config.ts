import { cookies } from "next/headers";

export type Locale = "it" | "en";

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get("officina-locale")?.value;
  return value === "en" ? "en" : "it";
}
