import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { Project } from "../../../typings";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == "projects"] | order(order asc) {
    ...,
    technologies[]->
  }
`;

export async function GET() {
  const projects: Project[] = await client.fetch(query, { next: { revalidate: 60 } });
  return NextResponse.json({ projects })
}
