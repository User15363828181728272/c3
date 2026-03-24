/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["snaptok.my.id", "www.snaptok.my.id", "localhost:3000"],
    },
  },
  // Suppress supabase/ssr warnings since we're not using it
  serverExternalPackages: [],
}

export default nextConfig
