module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_STRIPE_PK: process.env.NEXT_PUBLIC_STRIPE_PK,
  },
  images: {
    domains: ['static.nike.com', 'medias.go-sport.com', 'external-content.duckduckgo.com', 'www.boutique-foot.net', 'www.futbolemotion.com'],
  },
  
}
