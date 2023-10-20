/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'blogger.googleusercontent.com',

            },
            {
                hostname: 'engineering.fb.com'
            }
        ],
    },
}

module.exports = nextConfig
