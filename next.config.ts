import type { NextConfig } from "next";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "amaranoc.am",
            },
        ],
    },
};

export default nextConfig;