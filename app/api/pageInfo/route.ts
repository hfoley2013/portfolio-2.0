import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { PageInfo } from "../../../typings";
import { NextResponse } from "next/server";
 
const query = groq`
  *[_type == "pageInfo"][0]
`

export async function GET() {
  const pageInfo: PageInfo = await client.fetch(query, { next: { revalidate: 60 } });
  return NextResponse.json({ pageInfo });
}
