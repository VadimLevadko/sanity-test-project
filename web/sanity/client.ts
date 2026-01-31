import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "wgh3jw6s",
    dataset: "test",
    apiVersion: "2025-07-09",
    useCdn: false,
});