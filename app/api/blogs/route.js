import { getDataBlogs } from "@/services/blogs/blogs";

export async function POST(request){
    const {maxContent} = await request.json()
    const {blogs} = await getDataBlogs(maxContent);

    return Response.json(blogs, {
        status: 200
    })
}