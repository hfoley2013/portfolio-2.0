import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { Social } from "../../typings";
import { NextApiRequest, NextApiResponse } from "next";
 
const query = groq`
  *[_type == "social"]
`

type Data = {
  socials: Social[];
}

export async function getSocials(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  const socials: Social[] = await client.fetch(query);
  res.status(200).json({ socials })
}
