import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // SVG를 React 컴포넌트로 변환
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
