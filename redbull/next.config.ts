import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

const appRoot = process.cwd();
const workspaceRoot = path.join(appRoot, "..");
const dependencyRoot = fs.existsSync(path.join(appRoot, "node_modules", "three")) ? appRoot : workspaceRoot;

const nextConfig: NextConfig = {
  turbopack: {
    root: dependencyRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
