import type { NextConfig } from "next";
import {BASE_PATH} from "@/const/basePath";

const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
    basePath: BASE_PATH || undefined,
    assetPrefix: BASE_PATH ? `${BASE_PATH}/` : undefined,
};
export default nextConfig;
