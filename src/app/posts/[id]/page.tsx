import { Detail } from "./detail";
import { Metadata } from "next";
import { getPage } from "@/utils/get-page";

export const metadata: Metadata = {
  title: "Moon Will Know",
  description: "Moon will know",
  twitter: {
    card: "summary_large_image",
    title: "Moon Will Know",
    images: "/",
  },
};

export default async function PostDeatil({
  params: { id },
}: {
  params: { id: string };
}) {
  const { recordMap, description, title, cover } = await getPage(id);

  metadata.title = title;
  metadata.openGraph = {
    title,
    images: cover!,
  };
  metadata.twitter = {
    title,
    description,
    images: cover!,
    card: "summary_large_image",
  };

  return <Detail id={id} title={title} cover={cover} recordMap={recordMap} />;
}
