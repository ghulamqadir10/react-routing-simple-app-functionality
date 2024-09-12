import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/card";

const Single = () => {
  const [singleData, setSingleData] = useState(null);
  const  {id} = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setSingleData(json))
  }, []);

  return (
    <>
      <div>
      {singleData ? 
        <Card   
        image={singleData.image}
          title={singleData.title}
          description={singleData.description}
          brand={singleData.brand}
          price={singleData.price}
          category={singleData.category}
                 />:`loading`}
              </div>
    </>
  );
};

export default Single;

