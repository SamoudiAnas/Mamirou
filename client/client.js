import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "60c0gyn4",
    dataset: "production",
    useCdn: true,
});
