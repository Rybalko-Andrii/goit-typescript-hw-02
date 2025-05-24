import { ImageCard } from "../ImageCard/ImageCard";
import { UnsplashImage } from "../types";

interface Props {
  images: UnsplashImage[];
  onImageClick: (img: UnsplashImage) => void;
}

export const ImageGallery = ({ images, onImageClick }: Props) => (
  <ul>
    {images.map((img) => (
      <li key={img.id}>
        <ImageCard image={img} onClick={onImageClick} />
      </li>
    ))}
  </ul>
);
