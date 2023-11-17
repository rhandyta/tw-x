import { Timestamp } from "firebase/firestore";

const HOST = `${process.env.NEXT_PUBLIC_HOST}`

async function getData(value) {
    const fetchBlogs = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
        body: JSON.stringify({
          maxContent: value,
        }),
      });
      const fetchWorks = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/works`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
        body: JSON.stringify({
          maxContent: value,
        }),
      });
    
      try {
        const [blogsResponse, worksResponse] = await Promise.all([
          fetchBlogs,
          fetchWorks,
        ]);
        if (!blogsResponse.ok) throw new Error("Sorry, request data blogs failure");
        if (!worksResponse.ok) throw new Error("Sorry, request data works failure");
        const blogs = await blogsResponse.json();
        const works = await worksResponse.json();
        return { blogs, works };
      } catch (err) {
        return { blogs: [], works: [] };
      }
}


export default async function sitemap(){
    const {works, blogs} = await getData(250);
    const d = new Date()
    
    const worksArticles = works.map((item) => {
        const timeStamp = new Timestamp(item.updatedAt.seconds, item.updatedAt.nanoseconds);
        return {
            url: `${HOST}/works/${item.slug}`,
            lastModified: timeStamp.toDate(),
            changeFrequency: timeStamp.toDate() < d.getMonth() - 3 ? 'yearly' : "monthly",
            priority: timeStamp.toDate() < d.getMonth() - 3 ? 0.5 : 0.7
        }
    })
    const blogsArticles = blogs.map((item) => {
        const timeStamp = new Timestamp(item.updatedAt.seconds, item.updatedAt.nanoseconds);
        return {
            url: `${HOST}/blogs/${item.slug}`,
            lastModified: timeStamp.toDate(),
            changeFrequency: timeStamp.toDate() < d.getMonth() - 3 ? 'yearly' : "monthly",
            priority: timeStamp.toDate() < d.getMonth() - 3 ? 0.5 : 0.7
        }
    })
    
    return [
      {
        url: `${HOST}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${HOST}/works`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${HOST}/blogs`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${HOST}/about`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: `${HOST}/guestbook`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      ...worksArticles,
      ...blogsArticles
    ]
  }