import React from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { UnsplashImage } from "../Api/Api";

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

export const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul>
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};
