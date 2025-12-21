/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    generateBuildId: async () => {
        return 'spotlightnews24_V1';
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '159.89.192.248',
            },
            {
                protocol: 'https',
                hostname: 'apanel.spotlightnews24.com',
            },
            {
                protocol: 'https',
                hostname: 'dash.spotlightnews24.com',
            }
        ],
    },
    async rewrites() {
        return [
            {
                source: '/rss.xml',
                destination: '/api/rss',
            }
        ]
    },
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}

export default nextConfig;