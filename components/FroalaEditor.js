'use client'
//import FroalaEditorComponent from 'react-froala-wysiwyg' ;
import '../node_modules/froala-editor/css/froala_style.min.css'
import '../node_modules/froala-editor/css/froala_editor.pkgd.min.css'
import dynamic from 'next/dynamic';
import { useState } from 'react';

const FroalaEditor = dynamic(()=> import('react-froala-wysiwyg'),{ssr:false})
const FroalaEditorA = dynamic(()=> import('react-froala-wysiwyg'),{ssr:false})

const MyFroalaEditor = (props) => {

    const [model,setModel] = useState("")

    const handleModelChange = (e)=>{
        setModel(e)
    }
    const CostumEditor = new FroalaEditor('.selector',{theme:"dark"})
    const myconfig={
        placeholderText:"Tell Something to MOON",
        theme:'eg-dark',
        


    }

    return (
        <div id="editor" className=' w-[50vw]  '>
            <FroalaEditor tag='textarea' onModelChange={props.handleModelChange} config={myconfig} />
            {/* <h1 className=' text-orange-400 font-bold' dangerouslySetInnerHTML={{__html:model}}></h1> */}
        </div>
    );
}

export default MyFroalaEditor;