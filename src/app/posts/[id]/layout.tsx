export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="p-4 pb-0">{children}</main>;
}
