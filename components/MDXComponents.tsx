// components/MDXComponents.tsx
import Link from "next/link"
import type { AnchorHTMLAttributes, ImgHTMLAttributes, DetailedHTMLProps } from "react"
import clsx from "clsx"

type AProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export const MDXComponents = {
  ImageCaption: ({ children }: { children: React.ReactNode }) => (
    <span className="block text-center text-sm text-gray-500 dark:text-gray-400 my-4">
      {children}
    </span>
  ),

  a: ({ href = "", children, className, target, rel, ...rest }: AProps) => {
    const klass = clsx("text-accent hover:underline", className)

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={klass}>
          {children}
        </Link>
      )
    }

    return (
      <a
        href={href}
        className={klass}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        {...rest}
      >
        {children}
      </a>
    )
  },

  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} className={clsx("rounded-xl max-w-full mx-auto block my-6", props.className)} />
  ),

  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className={clsx("rounded-xl", (props as any).className)} />
  ),
}
