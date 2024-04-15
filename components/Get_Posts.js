'use client'

import Text_Card from "@/components/text_card";
import { fromJSON } from "postcss";
import { useEffect, useState } from "react";



const GetPosts = () => {

    const [Post,setPost]= useState([])
    
    useEffect(()=>{
            
        const read = async ()=>{
            const res = await fetch("../api/posttest");
            const data =await res.json();
            setPost(data);
        }
        read();
            //alert(Post)
            
        
    },[])
    
    return (
        <div className=" text-center text-white mt-[15vw]">
            <div>Post:{""}</div>
            result is : {Post.map((obj)=>(
                <Text_Card key={obj.id} title={obj.title} text={obj.content}  />
            ))}
            
        </div>
    );
}




export default GetPosts;