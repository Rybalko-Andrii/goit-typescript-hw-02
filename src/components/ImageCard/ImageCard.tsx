import { UnsplashImage } from "../types";

interface Props {
  image: UnsplashImage;
  onClick: (img: UnsplashImage) => void;
}

export const ImageCard = ({ image, onClick }: Props) => (
  <div onClick={() => onClick(image)}>
    <img src={image.urls.small} alt={image.alt_description} />
  </div>
);
