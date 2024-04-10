import Image from "next/image";
import WebDev from "@/public/webdesign.png"
import DataSci from "@/public/datasci.png"
import MoonAI from "@/public/ai.png"
import Tech_Items from "./Tech_Items";
import { titems } from "@/public/consts";


const Tech_Section = () => {
    return (
        <section className=" text-center sm:my-16" >
            <h1 className=" text-[hsl(194,55%,83%)] sm:text-6xl text-2xl sm:mb-24 mb-4 font-black ">Technology & Development</h1>
            <div className="">
            <Tech_Items 
                params={titems}
            
            />
            </div>

        </section>
    );
}

export default Tech_Section;