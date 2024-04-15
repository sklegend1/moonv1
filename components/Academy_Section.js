'use client'

import { Lesson_Items } from "@/public/consts";
import Lesson_card from "./Lesson_card";
import Image from "next/image";
import { useState } from "react";

const Academy_Section = () => {

    const [MouseStartX,setMouseStartX]=useState(0)
    const [MouseEndX,setMouseEndX]=useState(false)
    const [MousePrevX,setMousePrevX]=useState(0)
    const [MouseX,setMouseX]=useState(0)

    const Dragging=(e)=>{
        MouseEndX? setMouseX(
            e.clientX-MouseStartX+MousePrevX
            
            ) : NaN;
    }

    const snapping=(e)=>{
        MouseEndX? setMouseX(Math.floor((e.clientX-MouseStartX+MousePrevX)/370) * 370): NaN
        setMouseEndX(false) 
    }

    return (
        <section className=" w-[100vw]  overflow-hidden">
            <div className=" mx-auto" >
                <Image
                    src="/academylogo.png"
                    height={300}
                    width={300}
                    style={{margin:"auto",height:"10vw",objectFit:"contain"}}
                />
            </div>
            
            <div className={`grid  gap-5`}
             style={{gridTemplateColumns:"repeat(5,350px)", transform:`translateX(${MouseX}px)`, transition:`${!MouseEndX&&"transform ease-in 250ms"}`}}
             onMouseMove={(e)=>{Dragging(e)}}
             onMouseDown={(e)=>{setMouseEndX(true); setMouseStartX(e.clientX) }}
             onMouseUp={(e)=>{setMousePrevX(MouseX);snapping(e)}}
             >
                {Lesson_Items.map((obj)=>(
                    <div key={obj.id} className=" col-span-1 p-[8px]  ">
                        <Lesson_card params={obj} />
                    </div>
                ))}
                
            </div>
        </section>
    );
}

export default Academy_Section;