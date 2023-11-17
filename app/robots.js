export default function robots() {
    return {
      rules: {
        userAgent: '*',
        disallow: '/administrator/',
      },
      sitemap: `${process.env.NEXT_PUBLIC_HOST}/sitemap.xml`,
    }
  }