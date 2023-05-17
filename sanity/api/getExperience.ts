import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { Experience } from "../../typings";
import { NextApiRequest, NextApiResponse } from "next";
 
const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

type Data = {
  experiences: Experience[];
}

export async function getExperience(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  const experiences: Experience[] = await client.fetch(query);
  res.status(200).json({ experiences });
}
