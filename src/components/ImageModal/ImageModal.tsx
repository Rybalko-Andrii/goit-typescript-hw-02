import Modal from "react-modal";
import { UnsplashImage } from "../Api/Api";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: UnsplashImage | null;
}

export const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
  if (!image) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Image Modal">
      <img src={image.urls.regular} alt={image.alt_description ?? "image"} />
      <p>
        <strong>Author:</strong> {image.user.name}
      </p>
      <p>
        <strong>Likes:</strong> {image.likes}
      </p>
    </Modal>
  );
};
