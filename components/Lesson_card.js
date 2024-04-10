import Image from "next/image";
const Lesson_card = (params) => {
    return (
        <div className=" bg-slate-700 shadow-md 
         p-2 bg-opacity-30 
        text-center shadow-[0_0_15px_#76b9b9] rounded-md 
        w-[350px] grid h-full grid-cols-3 select-none ">

            <h2 className=" col-span-3 font-black text-[1vw] mb-3 text-white">{params.params.title}</h2>
            <p className=" row-span-1 col-span-1 text-left text-[1vw] mb-3 text-slate-400 overflow-hidden h-[10vw]">{params.params.text}</p>
            <div className=" col-span-2">
                <Image 
                    src={params.params.img}
                    height={400}
                    width={400}
                    style={""}
                />
            </div>
            <hr className=" col-span-3 text-center mb-3"/>
            <p className=" col-span-3 text-center text-slate-400">Length : {params.params.length} hours</p>
            <p className=" col-span-3 text-center text-slate-400">Method : {params.params.method}</p>
            <p className=" col-span-3 text-center text-slate-400">Students : {params.params.stds}</p>
            <div className=" mt-2 col-span-1 col-start-2 text-center">
                <button
                    className=" rounded-md border-blue-400 border-solid border-2 bg-opacity-20 
                    hover:bg-opacity-100 bg-blue-600 w-full ml-[1%] sm:px-[3%] py-[3%] 
                        sm:text-sm text-[10px] font-bold text-white">
                        Learn More
                </button>
            </div>

        </div>
    );
}

export default Lesson_card;