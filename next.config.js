module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/html/3Dcube.html',
        destination: '/3Dcube',
        permanent: true,
      },
      {
        source: '/html/labyrinth.html',
        destination: '/labyrinth',
        permanent: true,
      },
    ]
  },
}
