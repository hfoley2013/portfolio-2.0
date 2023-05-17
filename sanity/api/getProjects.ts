import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { Project } from "../../typings";
import { NextApiRequest, NextApiResponse } from "next";
 
const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

type Data = {
  projects: Project[];
};

export async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  const projects: Project[] = await client.fetch(query);
  res.status(200).json({ projects })
}
