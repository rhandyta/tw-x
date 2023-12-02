import * as xml2js from "xml2js";
import { dateTimeFormat } from "@/utils/helpers";
import { Timestamp } from "firebase/firestore";
async function getData(value) {
  const fetchBlogs = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/blogs`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
      body: JSON.stringify({
        maxContent: value,
      }),
    }
  );
  const fetchWorks = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/works`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
      body: JSON.stringify({
        maxContent: value,
      }),
    }
  );

  try {
    const [blogsResponse, worksResponse] = await Promise.all([
      fetchBlogs,
      fetchWorks,
    ]);
    if (!blogsResponse.ok)
      throw new Error("Sorry, request data blogs failure");
    if (!worksResponse.ok)
      throw new Error("Sorry, request data works failure");
    const blogs = await blogsResponse.json();
    const works = await worksResponse.json();
    return { blogs, works };
  } catch (err) {
    return { blogs: [], works: [] };
  }
}
export async function GET() {
  const HOST = `${process.env.NEXT_PUBLIC_HOST}`;


  const { works, blogs } = await getData(250);
  const d = new Date();

  const worksArticles = !works ? [] : works.map((item) => {
    const timeStamp = new Timestamp(item.updatedAt.seconds, item.updatedAt.nanoseconds);
    return {
        url: `${HOST}/works/${item.slug}`,
        lastModified: timeStamp.toDate(),
        changeFrequency: timeStamp.toDate() < d.getMonth() - 3 ? 'yearly' : "monthly",
        priority: timeStamp.toDate() < d.getMonth() - 3 ? 0.5 : 0.7
    }
})
const blogsArticles = !blogs ? [] : blogs.map((item) => {
    const timeStamp = new Timestamp(item.updatedAt.seconds, item.updatedAt.nanoseconds);
    return {
        url: `${HOST}/blogs/${item.slug}`,
        lastModified: timeStamp.toDate(),
        changeFrequency: timeStamp.toDate() < d.getMonth() - 3 ? 'yearly' : "monthly",
        priority: timeStamp.toDate() < d.getMonth() - 3 ? 0.5 : 0.7
    }
})


  const urls = [
    {
      url: `${HOST}`,
      lastModified: dateTimeFormat(blogs[0].createdAt),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${HOST}/works`,
      lastModified: dateTimeFormat(works[0].createdAt),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${HOST}/blogs`,
      lastModified: dateTimeFormat(blogs[0].createdAt),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${HOST}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${HOST}/guestbook`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...worksArticles,
    ...blogsArticles,
  ];


  // Membangun objek XML menggunakan xml2js
  const xmlObject = {
    urlset: {
      $: { 
        xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9", 
        "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
        "xmlns:image": "http://www.google.com/schemas/sitemap-image/1.1", 
        "xmlns:video": "http://www.google.com/schemas/sitemap-video/1.1" ,
        "xmlns:news": "http://www.google.com/schemas/sitemap-news/0.9"
        },
      url: urls.map((item) => ({
        loc: item.url,
        lastmod: item.lastModified.toISOString(),
        changefreq: item.changeFrequency,
        priority: item.priority.toString(),
      })),
    },
  };


  const xmlContent =  new xml2js.Builder().buildObject(xmlObject);

  return new Response(xmlContent, {
    status: 200,
    headers: {
        "Content-Type": "application/xml"
    }
  })
}
