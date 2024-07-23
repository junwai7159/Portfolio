import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "cptbi55a",
  dataset: "production",
  apiVersion: "2024-07-23",
  useCdn: false,
};

const client = createClient(config);

export default client;