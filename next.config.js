/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcPlugins: [['@swc-jotai/react-refresh', {}]],
    },
    images: {
        remotePatterns: [
            {
                hostname: 'blogger.googleusercontent.com',

            },
            {
                hostname: 'engineering.fb.com'
            },
            {
                hostname: 'images.unsplash.com'
            },
            {
                hostname: 'upload.wikimedia.org'
            },
            {
                hostname: 'www.ibm.com'
            }
        ],
    },
}

module.exports = nextConfig
