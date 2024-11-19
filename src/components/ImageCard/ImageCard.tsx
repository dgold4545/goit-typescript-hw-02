import { FC } from "react";
import { Image } from "../App/App.types";
import css from "./ImageCard.module.css";

interface ImageItemProps {
  image: Image,
}

const ImageCard: FC<ImageItemProps> = ({image}) => {
  return (
      <img className={css.img} src={image.urls.small} alt={image.alt_description} />
  );
};
export default ImageCard;
