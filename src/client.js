import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "a0npz1th",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skjy70zGbnk33VNZSlxjKe7o3CfA1kHlfIYpKj5xYp6gq4cpkYGTP18dOrOE54wc0GuE3GLNhYoc4g5tUZjf61mEvOPcZGfGqgtWDvBGHfOafkBdOVFQbv1NNGu4phNim8XfTTTWG8e9bM4ahJPnUJNzCybr5zONsdc8rPNoWjVvAbcY3uRg",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
