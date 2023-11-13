import { getDataWorks } from "@/services/works/works";

export async function GET(request){
    const {works} = await getDataWorks(9);

    return Response.json({works}, {
        status: 200
    })
}