import { CabinsTable } from "@/components/cabins";
import { getCabins } from "@/services/apiCabins";
import { useEffect } from "react";

const CabinsPage = () => {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  });
  return <CabinsTable />;
};

export default CabinsPage;
