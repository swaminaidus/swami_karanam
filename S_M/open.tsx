import React from 'react';
import { ResumeInfoProvider } from '@/context/resume-info-provider';
import EditResume from '@/app/(home)/_components/EditResume';

const Open = () => {
  return (
    <ResumeInfoProvider>
      <EditResume />
    </ResumeInfoProvider>
  );
};

export default Open;
