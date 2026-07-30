/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Site images never render wider than ~1080px (hero source itself is
    // 1000px) — the Next.js defaults go up to 3840 (4K), which just bloats
    // the srcset with candidates the optimizer would never need to serve.
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig
