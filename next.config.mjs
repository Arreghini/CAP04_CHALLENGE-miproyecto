/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,  
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',  
        port: '',  
        pathname: '/public/**',   
      },
    ],
  },
};

export default nextConfig;
