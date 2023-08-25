import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { Skill } from "../../../typings";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == "skill"] | order(title asc)
`
export async function GET() {
  const skills: Skill[] = await client.fetch(query, { next: { revalidate: 60 } });
  return NextResponse.json({ skills })
}
