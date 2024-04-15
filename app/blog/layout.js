import Image from "next/image";

const layout = ({children}) => {
    return (
        <div className=" h-screen grid ">
            <h1 className=" absolute text-center text-[5vw] mt-[13vw]
            ml-[3vw] font-bold text-[#9cc6db] z-10">MOON Blog</h1>
            <header className="  ml-[-10vw] ">
                <Image
                height={1920}
                width={672}
                sizes="100%"
                src='/blog/header1.jpg'
                alt="blog header image"
                style={{width:"110vw"}}
                />
            </header>
            <main>
                {children}
            </main>
            <footer className="w-full  grid grid-rows-2">
                
                    <Image
                    height={672}
                    width={1920}
                    src='/blog/footer1.png'
                    alt="blog header image"
                    style={{width:"100vw",gridRow: "start 1 / start 1"}}
                    />
                
            </footer>
        </div>
    );
}

export default layout;