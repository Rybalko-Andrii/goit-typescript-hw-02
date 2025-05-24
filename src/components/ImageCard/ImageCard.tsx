import React from "react";
import { UnsplashImage } from "../Api/Api";

interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

export const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div onClick={() => onClick(image)} style={{ cursor: "pointer" }}>
      <img src={image.urls.small} alt={image.alt_description ?? "image"} />
    </div>
  );
};
