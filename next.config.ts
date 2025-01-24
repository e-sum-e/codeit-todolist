import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["sprint-fe-project.s3.ap-northeast-2.amazonaws.com"], // 외부 이미지 도메인을 허용
  },
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
