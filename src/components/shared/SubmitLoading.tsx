import { lineSpinner } from "ldrs";

const SubmitLoading = () => {
  lineSpinner.register();
  return (
    <>
      <span className="ml-3">منتظر بمانید</span>
      <l-line-spinner
        size="20"
        stroke="1.7"
        speed="1"
        color="black"
      ></l-line-spinner>
    </>
  );
};

export default SubmitLoading;
