"use client"
import Image from "next/image";
import Tech_Container from "./Tech_Container";
import { useState } from "react";
const Tech_Items = (params) => {
    
      

    
    const IncIdx=()=>{
        {Idx===params.params.length-1 ? setIdx(0) : setIdx(Idx+1) }
        
    }

    const DecIdx=()=>{
        {Idx===0 ? setIdx(params.params.length-1) : setIdx(Idx-1) }
        
    }

    
    

    const [Idx,setIdx] = useState(0)
    return (
        
        <div className=" flex gap-4">
            <div className=" align-middle hover:cursor-pointer" onClick={()=>DecIdx()}>
                <div className=" bg-blue-950 rounded-md hover:bg-[#938ec4] shadow-black shadow-md h-[40vh] w-[6vw] text-center  ml-3 bg-opacity-20  text-white">
                    <h3 className=" relative text-3xl text-white top-[45%]">{"<"}</h3>
                </div>
            </div>
            
            <Tech_Container params={params.params[Idx]}  />
            
            <div className=" align-middle hover:cursor-pointer" onClick={()=> {IncIdx()    }} >
                <div className=" bg-blue-950 rounded-md hover:bg-[#938ec4] shadow-black shadow-md h-[40vh] w-[6vw] text-center  mr-3 bg-opacity-20  text-white">
                    <h3 className=" relative text-3xl text-white top-[45%]">{">"}</h3>
                </div>
            </div>
        </div>
    );
}

export default Tech_Items;