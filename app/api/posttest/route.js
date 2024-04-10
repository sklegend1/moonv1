import prisma from "@/lib/prisma"


export const POST = async (req) => {
    const {userid , title , content,categoryId,img} = await req.json()
    const post = await prisma.post.create({
        data:{
            title:title,
            content:content,
            authorId:parseInt(userid),
            published:false,
            categoryId:categoryId,
            img:img
        }
    })
    
    return new Response(JSON.stringify(post),{status:200})
}

export const GET= async (req) =>{

    const post = await prisma.post.findMany({
        orderBy:{
            id:"desc"
        }
    })


    return new Response(JSON.stringify(post),{status:200})
}

export const PUT = async (req) => {
    const newData = await req.json()
    const post = await prisma.post.update(newData)
    return new Response(JSON.stringify(newData),{status:201})
}

