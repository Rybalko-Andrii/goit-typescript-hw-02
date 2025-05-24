import Modal from "react-modal";

export const ImageModal = ({ isOpen, onClose, image }) => {
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
