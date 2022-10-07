import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "60c0gyn4",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-10",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
