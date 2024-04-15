import { Home_Address } from "@/public/consts";
import Post_Brief from "./Post_Brief";
import Newest_Post from "./Newest_Post";
import Posts_Summery from "./Posts_Summery";
import Posts_Summery_H from "./Posts_Summery_H";
import cat1 from "@/public/ai.png"
import cat2 from "@/public/responsive.png"
import cat3 from "@/public/designing.png"
import cat4 from "@/public/accounting.png"
import Blog_Stats from "./Blog_Stats";


const Feed3 = async () => {
    const getPost =async ()=>{
        const postRes = await fetch(Home_Address+"/api/posttest",{
            cache:'no-cache'
        })
        
        return postRes.json()
    }
    
    const getCat =async ()=>{
        const catRes = await fetch(Home_Address+"/api/category",{
            cache:'no-cache'
        })
        
        return catRes.json()
    }

    const postData1 = await getPost()
    const catData = await getCat()
    const newest = postData1[0]

    
    
    const makeSummery = (num,img)=>{

        const cat1Posts = postData1.filter(post=>
            post.categoryId==num
        )

        const selectedCat = catData.filter(cat=>
            cat.id==num
        )

        return (
                
            <Posts_Summery  image={img} catname={selectedCat[0].name} posts={cat1Posts} />
        )
    }

    const makeSummeryH = (num,img)=>{

        const cat1Posts = postData1.filter(post=>
            post.categoryId==num
        )

        const selectedCat = catData.filter(cat=>
            cat.id==num
        )

        return (
                
            <Posts_Summery_H  image={img} catname={selectedCat[0].name} posts={cat1Posts} />
        )
    }

    return (
        <div className=" m-[0vw]  ">
            
            <Newest_Post title={newest.title} image={newest.img} postId={newest.id} content={newest.content} />
            <hr className=" opacity-0 text-cyan-800 my-[5vw] border-2 shadow-md shadow-amber-200"></hr>
            {makeSummery(1,cat1)}
            <hr className=" opacity-0 text-cyan-800 my-[5vw] border-2 shadow-md shadow-amber-200"></hr>
            {makeSummeryH(3,cat3)}
            <hr className=" opacity-0 text-cyan-800 my-[5vw] border-2 shadow-md shadow-amber-200"></hr>
            <Blog_Stats />
            <hr className=" opacity-0 text-cyan-800 my-[5vw] border-2 shadow-md shadow-amber-200"></hr>
            

        </div>
    );
}

export default Feed3;