export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/administrator/',
      },
      sitemap: `${process.env.NEXT_PUBLIC_HOST}`,
    }
  }