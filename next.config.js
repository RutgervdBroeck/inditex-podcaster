const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        port: "",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is2-ssl.mzstatic.com",
        port: "",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is3-ssl.mzstatic.com",
        port: "",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is4-ssl.mzstatic.com",
        port: "",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is5-ssl.mzstatic.com",
        port: "",
        pathname: "/image/thumb/**",
      },
    ],
  },
};

module.exports = nextConfig;
