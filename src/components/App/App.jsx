import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { getPhotos } from "../Api/Api";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const data = await getPhotos(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = () => setPage((p) => p + 1);
  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage text={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
      <Toaster position="top-right" />
    </>
  );
}
