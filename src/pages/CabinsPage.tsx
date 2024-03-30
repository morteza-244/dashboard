import { getCabins } from "@/services/apiCabins";
import React, { useEffect } from "react";

const CabinsPage = () => {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  });
  return <div>CabinsPage</div>;
};

export default CabinsPage;
