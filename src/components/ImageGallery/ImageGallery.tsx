import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../App/App.types";
import { FC } from "react";

interface ImagesListProps {
  images: Image[];
  openModal: (image: Image) => void;
}
const ImageGallery: FC<ImagesListProps>  = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map((image: Image) => (
        <li key={image.id} className={css.item} onClick={() => openModal(image)}>
          <ImageCard
            image={image}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
