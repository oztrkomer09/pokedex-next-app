/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['raw.githubusercontent.com']
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/page/1",
                permanent: true,
            },

        ];
    },
}

module.exports = nextConfig
