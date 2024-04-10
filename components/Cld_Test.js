'use client'
// import {v2 as cloudinary} from 'cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
 

const Cld_Test = () => {
    const [CldRes,setCldRes] = useState()

    // const uploadImg=()=>{
    //     cloudinary.uploader.upload(
    //         "/public/background.jpg",{
    //             public_id: "Home_Background"
    //         },
    //         (err,res)=>{setCldRes(res)}
    //     )
    // }
    
    return (
        <div>
            <CldUploadButton uploadPreset='wqqld357' onSuccess={(result,{widget})=>{setCldRes(result.info.url)}} options={{public_id:"test1",folder:"testsub"}}  />
            <div>Result : {CldRes}</div>
        </div>
    );
}

export default Cld_Test;