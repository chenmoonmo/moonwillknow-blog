import Link from "next/link";
import { Me } from "@/components/me";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-128px)] flex flex-col items-center pt-40">
      <Me className="w-[100px] h-[127px]" />
      <h1 className="mt-6 text-2xl font-bold text-slate-800 dark:text-gray-200">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-4 font-bold text-green-600 hover:text-green-700"
      >
        Back home
      </Link>
    </main>
  );
}
