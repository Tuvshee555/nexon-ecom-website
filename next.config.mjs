/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Demo product thumbnails inside the sample chat use placeholder photography.
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;
