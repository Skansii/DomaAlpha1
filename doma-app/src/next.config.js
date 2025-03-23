/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript during production builds
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Handle Node.js modules on client side
    if (!isServer) {
      // Don't attempt to load Node.js modules on the client side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        async_hooks: false,
        net: false,
        tls: false, 
        child_process: false,
        bcrypt: false,
        '@mapbox/node-pre-gyp': false
      };
    }

    // Ignore Node.js specific modules in browser build
    config.module.rules.push({
      test: /\.(node)$/,
      use: 'null-loader',
    });

    return config;
  },
  serverExternalPackages: ['bcrypt', 'mongodb'],
};

module.exports = nextConfig; 