import { NextResponse } from 'next/server';
import { sanityClient } from '../../sanity/sanityClient';
import { groq } from "next-sanity";
 
const query = groq`
  *[_type == "social"]
`

type Data = {
  socials: Socials[]
}

export async function GET() {
  const res = await sanityClient.fetch(query);
  const data = await res.json();
 
  return NextResponse.json({ data });
}
