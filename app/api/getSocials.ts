// import { NextResponse } from 'next/server';
// import { sanityClient } from '../../sanity/sanityClient';
// import { groq } from "next-sanity";
// import { Social } from "../../typings";
 
// const query = groq`
//   *[_type == "social"]
// `

// type Data = {
//   socials: Social[];
// }

// export async function GET() {
//   const res = await sanityClient.fetch(query);
//   const socials: Social[] = await res.json();
 
//   return NextResponse.json({ socials });
// }
