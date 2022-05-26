/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/sandbox": { page: "/sandbox" },
      "/mainPanel": { page: "/mainPanel", query: "value" },
      "/codeRepo": { page: "/codeRepo", query: "searchObject" },
      "/docs": { page: "/docs" },
      "/submitTask": { page: "/submitTask" },
      "/internSearch": { page: "/internSearch" },
      "/dataRepresent": { page: "/dataRepresent" },
    };
  },
  reactStrictMode: false,
};
