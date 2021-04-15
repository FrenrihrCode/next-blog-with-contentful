import { createClient } from "contentful";

export const ContentfulClient = () =>
  createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  });
