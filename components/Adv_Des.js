'use client'
import { useEffect,useState } from "react";

import Image from "next/image";


const Adv_Des = (props) => {

    const [AdvImg,setAdvImg]=useState(1)

    setTimeout(()=>{
        {AdvImg<5?setAdvImg(AdvImg+1):setAdvImg(1)} 
    },3000)

    return (
        <div className=" grid grid-cols-2 rounded-md bg-blue-400 bg-opacity-20 shadow-md shadow-black ml-[2vw] p-[1vw] ">
            <div className=" h-[11vw] overflow-hidden col-span-2">
                <h3 className=" text-white font-bold text-2xl mb-5 text-left">{props.obj.title}</h3>
                <p className="row-start-2 top-[-2vw] text-yellow-100 text-[0.9vw]">{props.obj.text}</p>
            </div>
            
            <div className=" h-[12vw] flex mt-[1vw] ">
                <Image
                    src={`/advcarosel/${AdvImg}.png`}
                    height={400}
                    width={400}
                    style={{objectFit:"contain",height:"100%"}}
                />
                
                
            </div>
            <div className=" text-right ">
                <ul className=" mb-[3vw] text-right  mr-[3vw] mt-[1vw] right-[-10%]  text-white text-[1vw] ">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
                <button
                    className=" rounded-md text-white border-blue-400 border-solid border-2 bg-opacity-20 
                    hover:bg-opacity-100 bg-blue-600 w-[60%] bottom-0 sm:px-[1%] py-[1%] 
                        sm:text-sm text-[10px] font-bold">
                        Learn More
                </button>
            </div>
        </div>
    );
}

export default Adv_Des;