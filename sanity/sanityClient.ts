import { createClient } from "next-sanity"

export const config = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: false
};

export const sanityClient = createClient(config);
