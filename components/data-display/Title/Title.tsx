import React, { FC } from "react";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return <h1 className="text-4xl text-[#052330]">{title}</h1>;
};

export default Title;
