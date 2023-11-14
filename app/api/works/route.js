import { getDataWorks } from "@/services/works/works";

export async function POST(request){
    const {maxContent} = await request.json()
    const {works} = await getDataWorks(maxContent);

    return Response.json(works, {
        status: 200
    })
}