import Image from "next/image"
import Letters from "@/public/letters.png"
import Design from "@/public/designing.png"
import Print from "@/public/print.png"

const Adv_Section = () => {
    return (
        <section id="advertising" className=" text-center">
        
        <h1 className=" text-[hsl(194,55%,83%)] text-6xl font-black">Advertising Services</h1>
        <div className="flex mx-[10%] ">
          <div className=" opacity-70 hover:opacity-100 scale-75 hover:scale-100">
            <Image src={Print } className=" w-full mt-4 mx-auto mb-[-20%]"/>
            <h2 className=" text-[#daff46] text-4xl font-black font-serif">{"Printing"}</h2>
          </div>
          <div className=" opacity-70 hover:opacity-100 scale-75 hover:scale-100">
            <Image src={Letters } className=" w-full mt-4 mx-auto mb-[-20%]"/>
            <h2 className=" text-[#daff46] text-4xl font-black font-serif">{"Letter Signs"}</h2>
          </div>
          <div className=" opacity-70 hover:opacity-100 scale-75 hover:scale-100">
            <Image src={Design } className=" w-full mt-4 mx-auto mb-[-20%]"/>
            <h2 className=" text-[#daff46] text-4xl font-black font-serif">{"Graphic Design"}</h2>
          </div>
        </div>
        
      </section>
    );
}

export default Adv_Section;