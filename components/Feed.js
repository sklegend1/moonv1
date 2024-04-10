import Text_Card from "@/components/text_card";
import { Home_Address } from "@/public/consts";

async function GetData () {
    const res = await fetch(Home_Address+'/api/posttest')
    //const data =await res.json();
    return res.json()
}


export default async function Feed  () {

    const postdata = await GetData()
    return (
        <div className=" mt-[15vh]">
            {postdata.map((post)=>(
                <div key={post.id}>
                    <Text_Card title={post.title} text={post.content} />
                </div>
            ))}
        </div>
    );
}

