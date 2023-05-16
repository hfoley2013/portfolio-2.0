import { createClient } from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: false
});
