"use client";

import { BubbleMenu, Editor } from "@tiptap/react";
import { MessageSquare } from "lucide-react";
import React from "react";
import { triggerAddComment } from "@veltdev/tiptap-velt-comments";

function BubbleMenuComponent({ editor }: { editor: Editor | null }) {
  const tiptapVeltCommentConfig = {
    context: {
      storyId: "story-id",
      storyName: "story-name",
    },
  };

  const handleAddComment = () => {
    if (editor) triggerAddComment(editor, tiptapVeltCommentConfig);
  };
  return (
    <div>
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button className="cursor-pointer rounded-full bg-purple-400 p-2" onClick={handleAddComment}>
          <MessageSquare size={25} className="border-none outline-0 text-white object-center" />
        </button>
      </BubbleMenu>
    </div>
  );
}

export default BubbleMenuComponent;
