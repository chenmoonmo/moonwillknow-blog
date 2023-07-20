import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        className="w-full h-20 object-contain"
        src="/cat.JPG"
        alt=""
        width={100}
        height={80}
        // layout="fill"
      />
    </main>
  );
}
