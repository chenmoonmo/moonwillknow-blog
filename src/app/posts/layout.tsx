export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen max-w-7xl mx-auto px-5">{children}</main>;
}
