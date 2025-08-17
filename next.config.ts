import type { NextConfig } from "next";

const repo = "typing-speed-tester";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
    basePath: isProd ? `/${repo}` : undefined,
    assetPrefix: isProd ? `/${repo}/` : undefined,
};

export default nextConfig;
