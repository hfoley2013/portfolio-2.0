import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { Social } from "../../../typings";
import { NextResponse } from "next/server";
 
const query = groq`
  *[_type == "social"]
`

export async function GET() {
  const socials: Social[] = await client.fetch(query, { next: { revalidate: 60 } });
  return NextResponse.json({ socials })
}
