import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { Skill } from "../../typings";
import { NextApiRequest, NextApiResponse } from "next";
 
const query = groq`
  *[_type == "skill"]
`

type Data = {
  skills: Skill[];
}

export async function getSkills(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  const skills: Skill[] = await client.fetch(query);
  res.status(200).json({ skills })
}
