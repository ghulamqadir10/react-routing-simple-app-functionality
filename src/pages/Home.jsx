// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/card";

function Home() {
  const [data, setData] = useState(null);
  // usenavigate
  // const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const singleProduct=(item)=>{
  //   navigate(`/single/${item.{id}}`)
  // }

  return (
    <>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          flexWrap: `wrap`,
          gap: `12px`,
        }}
      >
        {data ? (
          data.map((item) => {
            return (
              <div key={item.id}>
                {/* <h1>car pakistan</h1> */}
                <Card
                  style={{ text: `underline` }}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  id={item.id}
                
                />
              </div>
            );
          })
        ) : (
          <span className="loading loading-ball loading-lg"></span>
        )}
      </div>
    </>
  );
}

export default Home;
