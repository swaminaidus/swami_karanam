import React from "react";
import { ResumeInfoProvider } from "@/context/resume-info-provider";

import Open from "@/S_M/open";
import EditResume from "@/app/(home)/_components/EditResume";



const Page = () => {
  return (
    <ResumeInfoProvider>
    
      <Open/>
    </ResumeInfoProvider>
  );
};

export default Page;