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
    return new Response(title,{status:200})
}

export const GET= async (req) =>{

    const category = await prisma.category.findMany({
        
    })


    return new Response(JSON.stringify(category),{status:200})
}

