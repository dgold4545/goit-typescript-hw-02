import { useEffect, useState } from "react";
import "./App.css";
import fetchImagesWithQuery from "../services/searchImagesApi";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import {Image } from "./App.types";
import toast, { Toaster } from "react-hot-toast";

const App : React.FC=()=> {
  const [showGalleryImages, setShowGalleryImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalState, setModalState] = useState<Image|null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;
    async function asyncWraper() {
      try {
        setError(false);
        setLoading(true);
        const data  = await fetchImagesWithQuery(query, page);
        if (data.total_pages === 0) {
          toast.error(
            "Sorry, there are no images matching your search query. Please try again!"
          );
        }
        if (page === data.total_pages) {
          setCurrentPage(true);
        }

        if (page === 1) {
          setShowGalleryImages(data.results);
        } else {
          setShowGalleryImages((prevShowGalleryImages) => [
          ...prevShowGalleryImages,
          ...data.results,
        ])
        }
      } catch (err) {
        setError(true);
       
      } finally {
        setLoading(false);
      }
    }
    asyncWraper();
  }, [query, page]);

  const onSearch = (query:string): void => {
    setQuery(query);
    setPage(1);
    setShowGalleryImages([]);
  };

  const showMore=()=> {
    setPage(page + 1);
  }
  function handleOpenModal(image: Image):void {
    setIsOpen(true);
    setModalState(image);
  }
  function closeModal():void {
    setIsOpen(false);
    setModalState(null);
  }
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <ImageGallery
         images={showGalleryImages}
         openModal={handleOpenModal}
       />
      {showGalleryImages.length > 0 && (
        <LoadMoreBtn incrementPage={showMore} currentPage={currentPage} />
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
        <ImageModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          modalImage={modalState}
         />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
