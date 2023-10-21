/** @type {import('next').NextConfig} */
const nextConfig = {
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
            }
        ],
    },
}

module.exports = nextConfig
