import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <ClipLoader
      color={"#38b6a1"}
      size={200}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;