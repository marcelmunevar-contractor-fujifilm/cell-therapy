import React, { ReactNode } from "react";

interface ImageCardProps {
  children: ReactNode;
}

const ImageCard: React.FC<ImageCardProps> = ({ children }) => {
  return <div className="image-card bg-white flex container mx-auto m-6 ">{children}</div>;
};

export default ImageCard;