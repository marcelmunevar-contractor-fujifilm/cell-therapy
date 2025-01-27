import React, { ReactNode } from "react";

interface ImageCardProps {
  children: ReactNode;
}

const ImageCard: React.FC<ImageCardProps> = ({ children }) => {
  return <div className="image-card">{children}</div>;
};

export default ImageCard;
