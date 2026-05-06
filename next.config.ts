import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["chanhdai-macbook.local"],
  devIndicators: false,
  images: {
    // Specific hosts only. Adding a new image source? Add the host here.
    // Wildcards are allowed (e.g. "**.ufs.sh") for CDNs that vary the
    // subdomain per upload.
    remotePatterns: [
      // UploadThing — primary blog/post screenshot host
      { protocol: "https", hostname: "**.ufs.sh" },
      // Demo / placeholder images used in tutorials
      { protocol: "https", hostname: "images.unsplash.com" },
      // Own domain — OG images and self-referenced assets
      { protocol: "https", hostname: "jb.desishub.com" },
      // TODO(migrate-off-chanhdai): still used by tech-stack.tsx (home
      // tech icons), use-click-sound.ts, two legacy blog frontmatter
      // images, and registry/examples/work-experience-demo.tsx.
      // Remove this entry once those have been migrated to local
      // assets or another source.
      { protocol: "https", hostname: "assets.chanhdai.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/components/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           // Prevents MIME type sniffing, reducing the risk of malicious file uploads
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           // Protects against clickjacking attacks by preventing your site from being embedded in iframes.
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         {
  //           // Controls how much referrer information is included with requests, balancing security and functionality.
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
