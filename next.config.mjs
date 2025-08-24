import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.infrastructureLogging = { level: "error" }

    config.ignoreWarnings = [
      { module: /@contentlayer\/core/, message: /generate-dotpkg\.js/ },
      { message: /Parsing of .*generate-dotpkg\.js/ },
    ]
    return config
  },
}

export default withContentlayer(nextConfig)

