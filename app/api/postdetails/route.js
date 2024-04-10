import prisma from "@/lib/prisma"


export const POST = async (req) => {
    const postData = await req.json()
    const post = await prisma.post.findUnique({
        where:{
            id:parseInt(postData.id)
        }
    })
    
    return new Response(JSON.stringify(post),{status:200})
}