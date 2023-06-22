import React, { FC } from "react";

interface ContentProps {
  content: string;
}

const Content: FC<ContentProps> = ({ content }) => {
  return <p className="text-[#052330]">{content}</p>;
};

export default Content;
