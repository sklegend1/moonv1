const Text_Card = (params) => {
    return (
        <div className=" bg-blue-950 rounded-md shadow-black shadow-md  sm:w-1/2 text-center w-full bg-opacity-20 sm:m-auto  text-white">
            <h2 className=" text-lg font-bold top-[-10%]">
                {params.title}
            </h2>
            <p className=" p-4 text-justify">
                {params.text}
            </p>
        </div>
    );
}

export default Text_Card;