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
  const safeTitle = title ?? "Moon Will Know";
  const safeDescription = description ?? "Moon will know";
  const safeCover = cover ?? undefined;

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
    title: safeTitle,
    description: safeDescription,
    openGraph: {
      title: safeTitle,
      images: safeCover,
    },
    twitter: {
      title: safeTitle,
      description: safeDescription,
      images: safeCover,
      card: "summary_large_image",
    },
  };
}

export default async function PostDeatil({ params: { id } }: PageProps) {
  const { recordMap, title, cover, status } = await getPage(id);
  const safeTitle = title ?? "Untitled";

  if (status !== "Published") {
    throw new Error("404");
  }

  return <Detail id={id} title={safeTitle} cover={cover} recordMap={recordMap} />;
}
