"use client"
import { useState , useEffect } from "react";
import Image from "next/image";
const Tech_Container = (params) => {
    
    const [Anim, setAnim] = useState(true);

    useEffect(() => {
        setAnim(false);
        setTimeout(() => {
          setAnim(true);
        }, 100);
      }, [params]);

    return (
        <div className=" grid sm:grid-cols-3 grid-cols-2 gap-[7%]">
            <div className=" sm:col-span-2 sm:w-full   text-left   text-white">
                
                    <h2 className={` opacity-0 ${Anim && "animate-[load-comp-l_500ms_ease-in_normal_forwards]"} text-[100%] font-bold top-[-10%] `} >
                        {params.params.title}
                    </h2>
                    <div className=" overflow-hidden h-[30vh] ">
                        <p className={` opacity-0 ${Anim && "animate-[load-comp-l_500ms_ease-in_300ms_normal_forwards]"} p-4 text-justify text-sm sm:text-base md:text-lg `}>
                            {params.params.text}
                        </p>
                    </div>
                    <div className={0 && "animate-[load-comp-scale_300ms_ease-in]"} >
                        <div className=" sm:flex hidden items-center align-middle">
                            
                            <Image src={params.params.icn1} width={200} height={200}  style={{objectFit:"contain", marginRight:"3%",height:"12vh",width:"10%", opacity:0 ,animation: Anim && "load-comp-scale 200ms ease-in normal forwards  " }}/>
                            <Image src={params.params.icn2} width={200} height={200}  style={{objectFit:"contain", marginRight:"3%",height:"12vh",width:"10%", opacity:0 ,animation: Anim && "load-comp-scale 200ms ease-in 200ms normal forwards " }}/>
                            <Image src={params.params.icn3} width={200} height={200}  style={{objectFit:"contain", marginRight:"3%",height:"12vh",width:"10%", opacity:0 ,animation: Anim && "load-comp-scale 200ms ease-in 400ms normal forwards " }}/>
                            <Image src={params.params.icn4} width={200} height={200}  style={{objectFit:"contain", marginRight:"3%",height:"12vh",width:"10%", opacity:0 ,animation: Anim && "load-comp-scale 200ms ease-in 600ms normal forwards " }}/>
                            
                            <div className={` w-[20vw] text-center opacity-0 ${Anim && "animate-[load-comp-scale_300ms_ease-in_800ms_normal_forwards]"}  `}>   
                                <button
                                    className=" rounded-md text-white border-blue-400 border-solid border-2 bg-opacity-20 
                                    hover:bg-opacity-100 bg-blue-600 w-full ml-[1%] sm:px-[3%] py-[3%] 
                                     sm:text-sm text-[10px] font-bold">
                                        Learn More
                                </button>
                            </div> 
                        </div>
                    </div>
                
            </div>
            
            <div className=" sm:col-span-1 " >
                
                <Image src={params.params.img} width={2000} height={2000}  style={{objectFit:"contain", opacity:0,height:"50vh" ,animation: Anim && "load-comp-scale 200ms ease-in 0ms normal forwards "  }}/>
            </div>
            <div className="sm:hidden col-span-2 mt-[-15vh] flex items-center align-middle text-center pl-[2vw]">
                
                <Image src={params.params.icn1} width={200} height={200}  style={{objectFit:"contain", marginRight:"3%",height:"12vh",width:"10vw", opacity:0 ,animation: Anim && "load-comp-scale 200ms ease-in normal forwards  " }}/>
                <Image src={params.params.icn2} width={200} height={200}  style={{objectFit:"contain", marginRight:"3%",height:"12vh",width:"10vw", opacity:0 ,animation: Anim && "load-comp-scale 200ms ease-in 200ms normal forwards " }}/>
                <Image src={params.params.icn3} width={200} height={200}  style={{objectFit:"contain", marginRight:"3%",height:"12vh",width:"10vw", opacity:0 ,animation: Anim && "load-comp-scale 200ms ease-in 400ms normal forwards " }}/>
                <Image src={params.params.icn4} width={200} height={200}  style={{objectFit:"contain", marginRight:"3%",height:"12vh",width:"10vw", opacity:0 ,animation: Anim && "load-comp-scale 200ms ease-in 600ms normal forwards " }}/>
                
                <div className=" w-full text-center  ">   
                    <button
                        className=" rounded-md border-blue-400 border-solid border-2 bg-opacity-20 
                        focus:bg-opacity-100 bg-blue-600 w-full ml-[1%] py-[3%] 
                            text-[10px] text-white font-bold">
                            Learn More
                    </button>
                </div> 
            </div>
        </div>
    );
}

export default Tech_Container;