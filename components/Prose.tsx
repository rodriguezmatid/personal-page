export default function Prose({ children }: { children: React.ReactNode }) {
  return <article className="prose prose-gray max-w-none dark:prose-invert">{children}</article>
}
