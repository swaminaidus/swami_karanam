import React from "react";
import { ResumeInfoProvider } from "@/context/resume-info-provider";
import EditResume from "../../../../_components/EditResume";
import Open from "@/S_M/open";


const Page = () => {
  return (
    <ResumeInfoProvider>
      <EditResume /> 
      
    </ResumeInfoProvider>
  );
};

export default Page;