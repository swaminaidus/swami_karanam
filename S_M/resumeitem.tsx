import React, { FC, useCallback, useMemo } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Dot, EllipsisVertical, FileText, Globe, Lock } from "lucide-react";
import Image from "next/image";
import Open from "./open";

interface PropType {
  documentId: string;
  title: string;
  status: "archived" | "private" | "public";
  themeColor: string | null;
  thumbnail: string | null;
  updatedAt: string;
}

const ResumeItem: FC<PropType> = ({
  documentId,
  themeColor,
}) => {
  const router = useRouter();

  const gotoDoc = useCallback(() => {
    router.push(`/dashboard/document/temp`);
  }, [router, documentId]);


  return (
    <div
      role="button"
      className="
        cursor-pointer max-w-[164px] w-full
        border 
        rounded-lg transition-all h-[197px]
        hover:border-primary
        hover:shadow-md
        shadow-primary
        "
      onClick={gotoDoc}
      style={{ borderColor: themeColor || "" }}
    >
      
    </div>
  );
};

export default ResumeItem;
