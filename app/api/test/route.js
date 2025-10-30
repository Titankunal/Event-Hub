import { NextResponse } from "next/server";
import { adminDB } from "@/lib/firebaseAdmin";

export async function GET() {
  const testDoc = await adminDB.collection("test").add({ timestamp: new Date() });
  return NextResponse.json({ status: "success", id: testDoc.id });
}
