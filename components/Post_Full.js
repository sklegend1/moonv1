'use client'
import Link from "next/link";
import { CldImage } from 'next-cloudinary';

 

const Post_Full = (props) => {

    const { content="<p>Empty</p>" , ...others} = props

    return (
        <div className=" relative  rounded-md bg-gray-900 bg-opacity-20 shadow-slate-400 m-5 shadow-inner p-[1%] w-3/4 mx-auto  ">
            <h2 className=" row-span-1 text-[2.5vw] mb-1 font-bold ">{props.title}</h2>
            <div className=" row-span-8">
                <CldImage
                    width="1600"
                    height="900"
                    src={props.image}
                    sizes="100%"
                    alt="Description of my image"
                    style={{margin:"auto",height:"100%",objectFit:"contain"}}
                />
            </div>
            <div  dangerouslySetInnerHTML={{__html:content}} 
            className="  row-span-2 border-opacity-20 rounded-md  p-4 text-[1.5vw]"
            />
            
            {/* <div>{content}</div> */}
            <div className="  row-span-1  w-full left-0 py-1 grid grid-cols-3 items-center text-center ">

                {/* <Link href={`/blog/${props.postId}_${props.title}`} 
                    className="rounded-full mx-[2%] py-[2%] bg-slate-700 text-[1.5vw] hover:bg-orange-400 col-start-3">
                    Read More
                </Link> */}

            </div>
        </div>
    );
}

export default Post_Full;