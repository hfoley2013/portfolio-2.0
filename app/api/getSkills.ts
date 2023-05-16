// import { NextResponse } from 'next/server';
// import { sanityClient } from '../../sanity/sanityClient';
// import { groq } from "next-sanity";
// import { Skill } from "../../typings";
 
// const query = groq`
//   *[_type == "skill"]
// `

// type Data = {
//   skills: Skill[];
// }

// export async function GET() {
//   const res = await sanityClient.fetch(query);
//   const skills: Skill[] = await res.json();
 
//   return NextResponse.json({ skills });
// }
