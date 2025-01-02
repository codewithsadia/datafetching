//** @type {import('next').NextConfig} */
//const nextConfig = {
  //images: {
    //domains: ['fakestoreapi.com'],
  //},
//};

//export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/**', // Matches all paths on this hostname
      },
    ],
  },
};

export default nextConfig;
