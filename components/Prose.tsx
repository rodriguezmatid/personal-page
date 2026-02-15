export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:tracking-tight prose-a:underline prose-a:font-medium prose-pre:rounded-none prose-img:rounded-none">
      {children}
    </div>
  )
}
