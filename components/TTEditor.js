"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

const TTEditor = () => {
  const editor = useEditor({
    extensions: [ Document, Paragraph, Text],
    content: "<p>Hello Mother Fucker</p>",
  });

  return (
    <div>
        
        <EditorContent editor={editor} />;
    </div>    
  )
};

export default TTEditor;
