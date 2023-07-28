export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[calc(100vh-128px)] max-w-7xl mx-auto px-5 pt-5">
      {children}
    </main>
  );
}
