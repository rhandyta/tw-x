import { getDataBlogs } from "@/services/blogs/blogs";

export async function GET(request){
    const {blogs} = await getDataBlogs(9);

    return Response.json(blogs, {
        status: 200
    })
}