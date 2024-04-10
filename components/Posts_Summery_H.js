'use client'

import { CldImage } from "next-cloudinary"
import Image from "next/image"
import Link from "next/link"


const Posts_Summery_H = (props) => {

    const {content="<p>No Content !</p>",...others} = props

    return (
        <div className=" mx-auto grid grid-rows-3 h-[40vw] aspect-[4/2] mb-[5vw] mt-[5vw] text-center   ">
            
            
            <div className=" m-[0.5vw] mx-auto row-span-2 grid grid-cols-2 h-[23vw] ">
                
                <Image 
                    width={800}
                    height={800}
                    src={props.image}
                    style={{objectFit:"contain",height:"22vw"}}
                    alt="Category Image"
                />
                <h2 className=" font-bold col-start-2 text-center text-[6vw]  m-auto">{props.catname}</h2>
            </div>

            <div className=" sm:h-[14vw] h-[25vw] grid grid-flow-col m-[0.5vw] mt-[-1vw] overflow-x-scroll overflow-y-hidden "  
                style={{direction:"ltr",scrollbarColor:" #516585 #01121c",scrollbarWidth:"thin"}}>
                
                {props.posts.map((obj)=>(
                    <div key={obj.id} className=" m-[0.5vw]  sm:h-[11vw] h-[21vw] col-span-1 aspect-[6/6] p-[0.5vw]
                     bg-slate-700  bg-opacity-40 text-center hover:bg-opacity-80 hover:cursor-pointer" >
                        <Link href={`/blog/${obj.id}_${obj.title}`} >
                    
                
                            <CldImage 
                                width={800}
                                height={800}
                                src={obj.img}
                                style={{objectFit:"contain",height:"80%"}}
                                alt={obj.title + " Image"}
                            />
                            <h3 className=" mt-[0vw] text-[1.5vw] font-bold">{obj.title}</h3>
                        </Link>
                    </div>
                ))}
                
                {/* <div className=" relative text-center">
                    <button className=" bg-slate-800 p-[0.5vw] rounded-full text-[2vw] absolute my-auto  ">Read Full Text</button>
                </div> */}

            </div>
        </div>
    );
}

export default Posts_Summery_H;