// import { NextResponse } from 'next/server';
// import { sanityClient } from '../../sanity/sanityClient';
// import { groq } from "next-sanity";
// import { Project } from "../../typings";
 
// const query = groq`
//   *[_type == "project"] {
//     ...,
//     technologies[]->
//   }
// `;

// type Data = {
//   projects: Project[];
// };

// export async function GET() {
//   const res = await sanityClient.fetch(query);
//   const projects: Project[] = await res.json();
 
//   return NextResponse.json({ projects });
// };
