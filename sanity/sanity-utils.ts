import { createClient } from "next-sanity";
import { groq } from 'next-sanity';

const config = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: false
};

const sanityClient = createClient(config);

export async function getPageInfo() {
  return sanityClient.fetch(
    groq`*[_type == 'pageInfo][0]`
  )
} 
