"use client";

import { VeltProvider, VeltComments, VeltCommentsSidebar } from "@veltdev/react";
// import YourAuthComponent from "./YourAuthComponent";
import EmailEditor from "./components/EmailEditor";

export default function App() {
  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY || ""}>
      <div className="h-screen bg-slate-50">
        {/* <YourAuthComponent /> */}
        <EmailEditor />
      </div>
      <VeltComments textMode={false} />
      <VeltCommentsSidebar />
      {/* <VeltPresence /> */}
    </VeltProvider>
  );
}
