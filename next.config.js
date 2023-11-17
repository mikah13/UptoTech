/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
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
            },
            {
                hostname: 'cdn-images-1.medium.com'
            },
        ],
    },
}

module.exports = nextConfig
