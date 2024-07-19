/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com',
          port: '',
          pathname: '/flutterflow-io-6f20.appspot.com/**',
        },
      ],
    },
  };
  
  export default nextConfig;