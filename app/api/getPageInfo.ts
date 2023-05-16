// import { NextResponse } from 'next/server';
// import { sanityClient } from '../../sanity/sanityClient';
// import { groq } from "next-sanity";
// import { PageInfo } from "../../typings";
 
// const query = groq`
//   *[_type == "pageInfo"][0]
// `

// type Data = {
//   pageInfo: PageInfo;
// }

// export async function GET() {
//   const res = await sanityClient.fetch(query);
//   const pageInfo: PageInfo = await res.json();
 
//   return NextResponse.json({ pageInfo });
// }
