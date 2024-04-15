'use client'

import { useState } from "react"
import { CldUploadButton } from "next-cloudinary"
import { Home_Address } from "@/public/consts"
import { useRouter } from "next/navigation"

const ImageUpload = ({params}) => {

    const router = useRouter()
    const postId = params.id_title.split("_")[0]
    const postTitle = params.id_title.split("_")[1]
    const [imgUrl,setImgUrl] = useState("")

    const UpdatePost = async (e)=>{
        alert("updating")
        e.preventDefault()
        try{
            const res = await fetch(Home_Address+"/api/posttest",{
                method:"PUT",
                body:JSON.stringify({
                    where:{
                        id:parseInt(postId)
                    },
                    data:{
                        img:imgUrl
                    }
                })
            })
            alert((await res.text()))
            router.push('/blog')

        }
        catch (error){

            alert(error)

        }
        
    }
    return (
        <div className=" mt-[10vw] text-center">
            <p>Please upload an image for {postTitle} </p>
            <label >Image : </label>
            <CldUploadButton className="  bg-slate-700 rounded-lg " uploadPreset='wqqld357' onSuccess={(result,{widget})=>{setImgUrl(result.info.url)}} options={{public_id:postId+"_"+postTitle}}  />
            <p>Image Url : {imgUrl} </p>
            <button className="  bg-slate-700 rounded-lg " onClick={UpdatePost}>Submit</button>
        </div>
    );
}

export default ImageUpload;