"use client";

import { VeltProvider, VeltComments, VeltPresence } from "@veltdev/react";
import YourAuthComponent from "./YourAuthComponent";
import YourDocument from "./YourDocument";
import Tiptap from "./components/TipTap";
import EmailEditor from "./components/EmailEditor";

export default function App() {
  return (
    <VeltProvider apiKey="GCFFpYOSrrRXNLk9HxR7">
      <div className="h-screen bg-slate-50">
        <YourAuthComponent />
        <EmailEditor />
      </div>
      <VeltComments textMode={false} />
    </VeltProvider>
  );
}
