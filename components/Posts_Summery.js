'use client'

import { CldImage } from "next-cloudinary"
import Image from "next/image"
import Link from "next/link"


const Posts_Summery = (props) => {

    const {content="<p>No Content !</p>",...others} = props

    return (
        <div className=" mx-auto grid grid-cols-2 h-[30vw] aspect-[5/2] mb-[5vw] mt-[5vw] ">
            
            <div className=" h-[30vw] grid grid-cols-2 m-[0.5vw] overflow-y-scroll overflow-x-hidden "  
                style={{direction:"ltr",scrollbarColor:" #516585 #01121c",scrollbarWidth:"thin"}}>
                
                {props.posts.map((obj)=>(
                    <div key={obj.id} className=" m-[0.5vw]  h-[13vw] aspect-[6/5] p-[1vw]
                     bg-slate-700  bg-opacity-40 text-center hover:bg-opacity-80 hover:cursor-pointer" >
                        <Link href={`/blog/${obj.id}_${obj.title}`} >
                    
                
                            <CldImage 
                                width={800}
                                height={800}
                                src={obj.img}
                                style={{objectFit:"contain",height:"9vw"}}
                                alt={obj.title + " Image"}
                            />
                            <h3 className=" mb-[1vw] text-[2vw] font-bold">{obj.title}</h3>
                        </Link>
                    </div>
                ))}
                
                {/* <div className=" relative text-center">
                    <button className=" bg-slate-800 p-[0.5vw] rounded-full text-[2vw] absolute my-auto  ">Read Full Text</button>
                </div> */}

            </div>
            <div className=" m-[0.5vw]  h-[30vw] ">
                <h2 className=" font-bold text-center text-[4vw]">{props.catname}</h2>
                <Image 
                    width={800}
                    height={800}
                    src={props.image}
                    style={{objectFit:"contain",height:"21vw"}}
                    alt="Category Image"
                />
            </div>
        </div>
    );
}

export default Posts_Summery;