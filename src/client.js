import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "4ua1sxrw",
  dataset: "production",
  useCdn: true,
});