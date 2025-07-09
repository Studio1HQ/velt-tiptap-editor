"use client";

import type { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Highlighter,
  Code,
  Strikethrough,
  MessageSquare,
  Link,
  ImageIcon,
  List,
  ListOrdered,
  Paperclip,
  BellRing,
} from "lucide-react";
import { triggerAddComment } from "@veltdev/tiptap-velt-comments";
import { VeltNotificationsTool } from "@veltdev/react";

interface EditorToolbarProps {
  editor: Editor | null;
}

export default function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) {
    return null;
  }

  const handleAddComment = () => {
    if (editor.state.selection.empty) {
      // Alert the user to select text first
      alert("Please select some text to comment on");
      return;
    }

    const commentConfig = {
      context: {
        documentId: "doc-" + Date.now(),
        documentName: "TipTap Document",
      },
    };

    triggerAddComment(editor, commentConfig);
  };

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-md border border-slate-200 bg-white p-1 shadow-sm">
      <div className="flex items-center">
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          aria-label="Heading 1"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Heading1 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          aria-label="Heading 2"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Heading2 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 3 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          aria-label="Heading 3"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Heading3 className="h-4 w-4" />
        </Toggle>
      </div>

      <Separator orientation="vertical" className="mx-1 h-6" />

      <div className="flex items-center">
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          aria-label="Bold"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          aria-label="Italic"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          aria-label="Strikethrough"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("code")}
          onPressedChange={() => editor.chain().focus().toggleCode().run()}
          aria-label="Code"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Code className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("highlight")}
          onPressedChange={() => editor.chain().focus().toggleHighlight().run()}
          aria-label="Highlight"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Highlighter className="h-4 w-4" />
        </Toggle>
      </div>

      <Separator orientation="vertical" className="mx-1 h-6" />

      <div className="flex items-center">
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: "left" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
          aria-label="Align left"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <AlignLeft className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: "center" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
          aria-label="Align center"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <AlignCenter className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: "right" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
          aria-label="Align right"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <AlignRight className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: "justify" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("justify").run()
          }
          aria-label="Justify"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <AlignJustify className="h-4 w-4" />
        </Toggle>
      </div>

      <Separator orientation="vertical" className="mx-1 h-6" />

      <div className="flex items-center">
        <Toggle
          size="sm"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Link className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <ImageIcon className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          className="rounded data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
        >
          <Paperclip className="h-4 w-4" />
        </Toggle>
      </div>

      <Separator orientation="vertical" className="mx-1 h-6" />

      <div className="flex items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddComment}
          className="flex items-center gap-1 rounded border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Comment</span>
        </Button>
      </div>
      <Separator orientation="vertical" className="mx-1 h-6" />
      {/* <Button className="hover:bg-gray-500 cursor-pointer duration-200">
        <BellRing size={15} color="#fff" />
      </Button> */}
      <VeltNotificationsTool />
    </div>
  );
}
