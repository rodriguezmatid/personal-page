// components/MDXComponents.tsx
import Link from "next/link"
import type { AnchorHTMLAttributes, ImgHTMLAttributes, DetailedHTMLProps } from "react"
import clsx from "clsx"

type AProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export const MDXComponents = {
  a: ({ href = "", children, className, target, rel, ...rest }: AProps) => {
    const klass = clsx("text-accent hover:underline", className)

    // Links internos → Next Link
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={klass}>
          {children}
        </Link>
      )
    }

    // Externos → <a>
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
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} className={clsx("rounded-xl", props.className)} />
  ),

  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className={clsx("rounded-xl", (props as any).className)} />
  ),
}
