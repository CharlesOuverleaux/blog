import React, { FC } from "react";
import Image from "next/image";

export type BlogImageProps = {
  image: {
    src: string;
    alt: string;
  };
};

const BlogImage: FC<BlogImageProps> = ({ image }) => {
  return (
    <div>
      <Image height={152} width={300} src={image.src} alt={image.alt} />
    </div>
  );
};

export default BlogImage;
