import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  incrementPage: () => void;
  currentPage: boolean;
}

const LoadMoreBtn: FC<LoadMoreProps> = ({ incrementPage,
  currentPage, }) => {
  return (
    !currentPage && (<>
      <button type="button" className={css.button} onClick={incrementPage}>
        Load more
      </button>
    </>)
    
  );
};
export default LoadMoreBtn;
