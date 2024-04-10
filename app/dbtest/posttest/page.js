'use client'



import MyFroalaEditor from "@/components/FroalaEditor";
import { CldUploadButton } from 'next-cloudinary';
import TTEditor from "@/components/TTEditor";
import { useEffect, useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const TestPost = () => {
    const router = useRouter()
    const [model,setModel] = useState("")
    const [resD,setResD] = useState()
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        const read = async ()=>{
            const res = await fetch("../api/category");
            const data =await res.json();
            setCategories(data);
        }
        read();
    },[])

    const handleModelChange = (e)=>{
        setModel(e)
    }
    const [post,setPost]=useState({userid:1,title:"Post Title",content:"",categoryId:1,category:"",img:"https://res.cloudinary.com/dh1hxhllg/image/upload/v1711790970/rnlyfqhelvjyfn87o6wp.jpg"})
    const [resdata,setResdata]=useState("")
    
    const rdtest=()=>{
        router.push('/blog')
    }
    
    const SendPost = async (e)=>{
        e.preventDefault()
        try{
            const res = await fetch("../api/posttest",{
                cache:"no-cache",
                method:"POST",
                body:JSON.stringify({
                    userid:post.userid,
                    title:post.title,
                    content:model,
                    categoryId:parseInt(post.categoryId),
                    img:post.img
                })
            })
            
            const newId = await res.json()
            setResD(newId.id)
            // console.log(newId)
             alert(newId.id)
            router.push("/blog/imgupload/"+newId.id.toString()+"_"+post.title)
        }
        catch (error){

            alert(error)

        }
        
    }

    return (
        <div className=" mt-[20vh]">
            <div>{post.categoryId} : {post.category} = {post.title}</div>
            <form className=" grid grid-cols-[repeat(2,minmax(8vw,15vw))] gap-2 ml-[2vw]" onSubmit={SendPost}>
                <label >User ID : </label>
                <input name="userid" type="number" className=" bg-slate-800" onChange={(e)=>setPost({...post,userid:e.target.value})} />
                
                <label >Category : </label>
                <select className=" bg-slate-800" onChange={(e)=>setPost({...post,categoryId:e.target.value,category:e.target.options[e.target.selectedIndex].textContent})}>
                    {categories.map((cat)=>(
                        <option 
                         key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                <label >Title : </label>
                <input  name="title" type="text" className=" bg-slate-800"  onChange={(e)=>setPost({...post,title:e.target.value})} />
                
                <label >Content : </label>
                <MyFroalaEditor handleModelChange={handleModelChange}/>
                
                {/* <label >Image : </label>
                <CldUploadButton className="  bg-slate-700 rounded-lg " uploadPreset='wqqld357' onSuccess={(result,{widget})=>{setPost({...post,img:result.info.url})}} options={{public_id:resD+"_"+post.title}}  />
                */}

                <button type="submit" className=" bg-slate-700 rounded-lg col-span-2 mx-[30%]" >Submit</button>
            </form>
            <br/>
            <div>Rsult : {resD}</div>
            <button onClick={rdtest}>redirect test</button>

            
        </div>
    );
}

export default TestPost;