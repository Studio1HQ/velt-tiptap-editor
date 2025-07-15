"use client";

import { useState } from "react";
import TipTap from "./TipTap";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Archive,
  ChevronDown,
  Clock,
  File,
  Inbox,
  MailPlus,
  MoreHorizontal,
  PlaneIcon as PaperPlane,
  Search,
  Send,
  Star,
  Trash,
} from "lucide-react";
import { VeltCommentTool, VeltNotificationsTool, VeltSidebarButton } from "@veltdev/react";
// import UserSelect from "../UserSelect";
// import UserSwitcher from "../UserSelect";
import AuthComponent from "../AuthComponent";
import DeleteCommentsButton from "./delete-comments-button";

export default function EmailEditor() {
  const [recipients] = useState<string[]>(["alex@example.com"]);
  const [subject, setSubject] = useState<string>("");

  return (
    <div className="relative flex h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-slate-50 border-r border-slate-200">
        <div className="p-4">
          <Button className="w-full justify-start gap-2 bg-blue-600 hover:bg-blue-700">
            <MailPlus size={18} />
            <span>Compose</span>
          </Button>
        </div>

        <div className="px-3 py-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              type="search"
              placeholder="Search mail"
              className="w-full bg-slate-100 pl-8 focus-visible:ring-blue-500"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-auto py-2">
          <div className="px-3 py-1">
            <h2 className="mb-2 px-2 text-xs font-semibold text-slate-500">
              FOLDERS
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800"
              >
                <Inbox size={16} />
                <span>Inbox</span>
                <Badge className="ml-auto bg-blue-600">24</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Star size={16} />
                <span>Starred</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Clock size={16} />
                <span>Snoozed</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Send size={16} />
                <span>Sent</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <File size={16} />
                <span>Drafts</span>
                <Badge className="ml-auto bg-slate-600">3</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Archive size={16} />
                <span>Archive</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Trash size={16} />
                <span>Trash</span>
              </Button>
            </div>
          </div>

          <div className="mt-6 px-3 py-1">
            <h2 className="mb-2 px-2 text-xs font-semibold text-slate-500">
              LABELS
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>Personal</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <span>Work</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <span>Important</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <span>Projects</span>
              </Button>
            </div>
          </div>
        </nav>

        <div className="p-3 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-slate-500">john@example.com</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreHorizontal size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Email Header */}
        <div className="border-b border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-slate-900">
              New Message
            </h1>
            <div className="flex items-center gap-2">
              <div className="bg-gray-50 flex justify-center items-center rounded-lg p-0.5 w-fit">
                <VeltNotificationsTool variant="primary" />
              </div>
              <Button variant="outline" size="sm">
                <Clock size={16} className="mr-1" /> Save Draft
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <PaperPlane size={16} className="mr-1" /> Send
              </Button>
            </div>
          </div>

          {/* Recipients */}
          <div className="mb-2 flex items-center gap-2">
            <div className="w-16 flex-shrink-0 text-sm font-medium text-slate-700">
              To:
            </div>
            <div className="flex flex-1 flex-wrap items-center gap-1 rounded-md border border-slate-300 px-2 py-1">
              {recipients.map((recipient, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-100">
                  {recipient}
                  <button className="ml-1 text-slate-500 hover:text-slate-700">
                    ×
                  </button>
                </Badge>
              ))}
              <input
                type="text"
                className="flex-1 border-0 bg-transparent p-1 text-sm focus:outline-none"
                placeholder="Add recipients..."
              />
            </div>
            <Button variant="ghost" size="sm">
              <ChevronDown size={16} />
            </Button>
          </div>

          {/* Subject */}
          <div className="flex items-center gap-2">
            <div className="w-16 flex-shrink-0 text-sm font-medium text-slate-700">
              Subject:
            </div>
            <Input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Add a subject..."
              className="flex-1 border-slate-300"
            />
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 overflow-auto">
          <div className="mx-auto max-w-4xl p-4">
            <TipTap />
          </div>
          <div className="flex justify-center items-center">
            <div className="absolute bottom-2.5 bg-gray-800 w-fit py-1 px-1.5 rounded-full flex items-center justify-around gap-2">
              <VeltSidebarButton title="View all comments" aria-label="View all comments" />
              <VeltCommentTool title="Add a comment" aria-label="Add a comment" />
              <AuthComponent />
              <DeleteCommentsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
