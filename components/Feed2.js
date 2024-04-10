import { Home_Address } from "@/public/consts";
import Post_Brief from "./Post_Brief";


const Feed2 = async () => {
    const getPost =async ()=>{
        const postRes = await fetch(Home_Address+"/api/posttest",{
            cache:'no-cache'
        })
        
        return postRes.json()
    }
    
    const postData1 = await getPost()
    return (
        <div className=" m-[10vw] ">
            {/* <div>{JSON.stringify(postData1)}</div> */}
            <div>
                {postData1.map((post)=>(
                        <Post_Brief title={post.title} content={post.content} key={post.id} postId={post.id} image={post.img}/>
                        // <div key={post.id}>url : {post.img}</div>
                ))}
            </div>
            {/* for (let post in postData1) {
                <Post_Brief title={post.title} content={post.content} key={post.id} postId={post.id} image={post.img}/>
            } */}

        </div>
    );
}

export default Feed2;