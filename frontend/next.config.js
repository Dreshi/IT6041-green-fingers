/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com'
    ],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects(){
    return [{source: "/canceled", destination: "/", permanent: true}];
  },
};

module.exports = nextConfig
