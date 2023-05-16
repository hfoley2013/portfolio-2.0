// import { NextResponse } from 'next/server';
// import { sanityClient } from '../../sanity/sanityClient';
// import { groq } from "next-sanity";
// import { Experience } from "../../typings";
 
// const query = groq`
//   *[_type == "experience"]
// `;

// type Data = {
//   experience: Experience[];
// }

// export async function GET() {
//   const res = await sanityClient.fetch(query);
//   const experience: Experience[] = await res.json();
 
//   return NextResponse.json({ experience });
// }
