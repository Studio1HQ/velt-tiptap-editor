"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { useEffect, useState } from "react";
import TipTapToolbar from "./TipTapToolbar";
import { TiptapVeltComments } from "@veltdev/tiptap-velt-comments";
import BubbleMenuComponent from "./BubbleMenu";
import { highlightComments } from "@veltdev/tiptap-velt-comments";
import { useCommentAnnotations, useVeltClient } from "@veltdev/react";

export default function TipTap() {
  const commentAnnotations = useCommentAnnotations();
  const {client} = useVeltClient();
  
  const [content, setContent] = useState(
    "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores atque non amet numquam optio aliquid quo laboriosam pariatur ipsa voluptatem similique assumenda cum, quia consectetur expedita est voluptatum? Accusamus, nobis.</p>"
  );

  const editor = useEditor({
    extensions: [
      TiptapVeltComments,
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
      }),
      Highlight,
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });
  
  const [isEditable] = useState(true);
  
  useEffect(() => {
    // useSetDocumentId("my-document-id");
    if(client) {
      client.setDocument("my-document-id", {documentName: "My document name"});
    }
    if (editor && commentAnnotations?.length) {
      editor.setEditable(isEditable);
      
      highlightComments(editor, commentAnnotations);
    }
  }, [editor, commentAnnotations, isEditable, client]);
  
  return (
    <div className="flex flex-col space-y-4">
      <TipTapToolbar editor={editor} />
      <BubbleMenuComponent editor={editor} />
      <EditorContent
        editor={editor}
        className="prose max-w-none p-4 m-h-[350px] focus:outline-none px-2.5"
      />
    </div>
  );
}
