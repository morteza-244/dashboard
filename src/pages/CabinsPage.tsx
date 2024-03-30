import { getCabins } from "@/services/apiCabins";
import { useEffect } from "react";

const CabinsPage = () => {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  });
  return <div>Cabins page</div>;
};

export default CabinsPage;
