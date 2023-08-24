import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { Experience } from "../../../typings";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export async function GET() {
  const experiences: Experience[] = await client.fetch(query, { next: { revalidate: 60 } });
  return NextResponse.json({ experiences });
}
