'use client'
import { useEffect,useState } from "react";

import Image from "next/image";


const Adv_Des_Mob = (props) => {

    const [AdvImg,setAdvImg]=useState(1)

    setTimeout(()=>{
        {AdvImg<5?setAdvImg(AdvImg+1):setAdvImg(1)} 
    },3000)

    return (
        <div className=" grid grid-cols-2 rounded-md bg-opacity-10 shadow-md shadow-black  p-[3vw] ">
            <div className=" h-[40vw]  col-span-1 grid grid-cols-3 grid-rows-3">
                <h3 className=" text-white col-span-3  font-bold text-md mt-5 text-left">{props.obj.title}</h3>
                <p className="row-start-2 overflow-hidden col-span-2 row-span-2 top-[-2vw] text-yellow-100 text-[2vw]">{props.obj.text}</p>
                <ul className=" mb-[3vw] text-right row-start-2 mr-[3vw] mt-[1vw] right-[-10%]  text-white text-[3vw] ">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>
            
            <div className=" h-[40vw] flex m-[1vw] row-span-2 ">
                <Image
                    src={`/advcarosel/${AdvImg}.png`}
                    height={400}
                    width={400}
                    style={{objectFit:"contain",height:"100%"}}
                />
                
                
            </div>
            <div className=" text-center col-span-2 ">
                
                <button
                    className=" rounded-md my-[2vw] text-white border-blue-400 border-solid border-2 bg-opacity-20 
                    hover:bg-opacity-100 bg-blue-600 w-[60%] bottom-0  py-[1%] 
                         text-[10px] font-bold">
                        Learn More
                </button>
            </div>
        </div>
    );
}

export default Adv_Des_Mob;