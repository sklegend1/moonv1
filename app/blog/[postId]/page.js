
import { Home_Address } from "@/public/consts"
import Post_Full from "@/components/Post_Full"

const page = async ({params}) => {
    const currentId = params.postId.split("_")[0]
    const postTitle = params.postId.split("_")[1]

    const getPost =async (e)=>{
        // e.preventDefault()
        const postRes = await fetch(Home_Address+"/api/postdetails",{
            method:"POST",
            cache:"no-cache",
            body:JSON.stringify({
                id:parseInt(currentId)
            })
        })
        
        return postRes.json()
    }
    
    const postData1 = await getPost()

    return (
        <div className="  mb-[-20vw]">
            <Post_Full title={postData1.title} content={postData1.content}  postId={postData1.id} image={postData1.img}/>
        </div>
    );
}

export default page;