"use client";

import { BubbleMenu, Editor } from "@tiptap/react";
import { MessageCircleCode } from "lucide-react";
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
        <button className="cursor-pointer" onClick={handleAddComment}>
          <MessageCircleCode size={20} />
        </button>
      </BubbleMenu>
    </div>
  );
}

export default BubbleMenuComponent;
