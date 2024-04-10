'use client'

import { CldImage } from "next-cloudinary"


const Newest_Post = (props) => {

    const {content="<p>No Content !</p>",...others} = props

    return (
        <div className=" mx-auto grid grid-cols-2 h-[30vw] aspect-[5/2] ">
            
            <div className=" h-[30vw] grid grid-rows-10 m-[0.5vw] " style={{direction:"ltr"}}>
                <h2 className=" row-span-2 font-bold text-[6vw]">{props.title}</h2>
                <div className=" row-span-6 text-[1vw] overflow-hidden my-[2vw]" dangerouslySetInnerHTML={{__html:content}}></div>
                <div className=" relative row-span-1 text-center">
                    <button className=" bg-slate-800 p-[0.5vw] rounded-full text-[2vw] absolute my-auto  ">Read Full Text</button>
                </div>

            </div>
            <div className=" m-[0.5vw]  ">
                <CldImage 
                    width={800}
                    height={800}
                    src={props.image}
                    style={{objectFit:"contain",height:"28vw"}}
                
                />
            </div>
        </div>
    );
}

export default Newest_Post;