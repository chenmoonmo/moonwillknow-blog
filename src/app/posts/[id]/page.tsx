import { Detail } from "./detail";
import { getPage } from "@/utils/get-page";
import { Metadata } from "next";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: PageProps): Promise<Metadata> {
  const { description, title, cover, status } = await getPage(id);

  if (status !== "Published") {
    return {
      title: "Moon Will Know",
      description: "Moon will know",
      applicationName: "MoonWillKnow",
      appleWebApp: {
        capable: true,
        title: "MoonWillKnow",
        statusBarStyle: "default",
        startupImage: "/launch.png",
      },
      formatDetection: {
        telephone: false,
      },
      manifest: "/manifest.json",
      icons: "/icons/icon-144x144.png",
      themeColor: [
        {
          media: "(prefers-color-scheme: dark)",
          color: "rgb(30,41,59)",
        },
        {
          media: "(prefers-color-scheme: light)",
          color: "#fff",
        },
      ],
    };
  }

  return {
    title,
    description,
    openGraph: {
      title,
      images: cover!,
    },
    twitter: {
      title,
      description,
      images: cover!,
      card: "summary_large_image",
    },
  };
}

export default async function PostDeatil({ params: { id } }: PageProps) {
  const { recordMap, title, cover, status } = await getPage(id);

  if (status !== "Published") {
    throw new Error("404");
  }

  return <Detail id={id} title={title} cover={cover} recordMap={recordMap} />;
}
