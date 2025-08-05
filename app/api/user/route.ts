// import { auth } from "@/auth";
// import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { NextResponse } from "next/server";

// const GET = async () => {
//   const session = await auth();
//   if (!session) return null;
//   return new NextResponse(JSON.stringify(session));
// };

// export default GET;

export async function GET() {
  const session = await auth();
  if (!session) return null;
  return new NextResponse(JSON.stringify(session));
}
