import Modal from "react-modal";
import { UnsplashImage } from "../types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  image: UnsplashImage | null;
}

export const ImageModal = ({ isOpen, onClose, image }: Props) => {
  if (!image) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Image Modal">
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>
        <strong>Author:</strong> {image.user.name}
      </p>
      <p>
        <strong>Likes:</strong> {image.likes}
      </p>
    </Modal>
  );
};
