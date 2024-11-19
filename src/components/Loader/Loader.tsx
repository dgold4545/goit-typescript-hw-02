import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="90"
      width="90"
      color="#1518cc"
      radius="12"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
export default Loader;
