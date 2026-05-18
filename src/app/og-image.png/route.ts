import { redirect } from "next/navigation";

export function GET() {
  redirect("/og-image.svg");
}
