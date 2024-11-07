module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ndlsearch.ndl.go.jp',
        port: '',
        pathname: '/thumbnail/**',
        search: '',
      },
    ],
  },
}