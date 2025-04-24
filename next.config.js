/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "vhs.charm.sh",
            },
        ],
    },
};
module.exports = nextConfig;
