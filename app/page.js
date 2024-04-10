import Image from "next/image";
import MoonBG from "@/public/background.jpg"
import Letters from "@/public/letters.png"
import Design from "@/public/designing.png"
import Print from "@/public/print.png"
import Text_Card from "@/components/text_card";
//import Adv_Section from "@/components/adv_section";
import Tech_Section from "@/components/tech_section";
import Academy_Section from "@/components/Academy_Section";
import Link from "next/link";
import Adv_Section from "@/components/Adv_Section2";

export default function Home() {
  return (
    <main className=" bg-[#01121c] bg-opacity-100">
      <div className=" w-full flex-col">
        <Image src={MoonBG} />
        <div className=" text-center p-4">
          <Text_Card 
          title="Who We Are ?" 
          text="Aliqua voluptate mollit id eiusmod Lorem non id sint anim. Eu fugiat aliquip laboris non consectetur ipsum exercitation fugiat deserunt. Fugiat aliqua anim reprehenderit voluptate et. Et adipisicing aute aute et Lorem anim elit sint pariatur velit quis. Lorem minim pariatur duis non incididunt enim ea sint reprehenderit qui deserunt fugiat qui consectetur. Nulla irure id tempor commodo anim voluptate."
          />
        </div>
      </div>
      <hr className=" opacity-20 text-cyan-800 my-4 border-2 shadow-md shadow-amber-200"></hr>
      <Adv_Section/>
      
      <hr className=" opacity-20 text-cyan-800 my-4 border-2 shadow-md shadow-amber-200"></hr>
      <Tech_Section/>
      <hr className=" opacity-20 text-cyan-800 my-4 border-2 shadow-md shadow-amber-200"></hr>
      <Academy_Section/>
      
      <hr className=" opacity-20 text-cyan-800 my-4 border-2 shadow-md shadow-amber-200"></hr>
      <Link href="#advertising"> My Section </Link>
    </main>
  );
}
