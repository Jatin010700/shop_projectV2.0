// Card.tsx
"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProductModel {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
type CardProps = {
  product: ProductModel[];
}
const Card: React.FC<CardProps> = ({product}) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/getMongoDBContent");
        setProducts(res.data);
        console.log(res.data);
        console.log("Data fetch ;D");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="bg-white p-4">
        <h1 className="text-4xl text-dark pl-2 pb-4 font-bold">
          New In Store
          {/* <FontAwesomeIcon icon={faCaretRight} className="text-RED ml-2" /> */}
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 xl:grid-cols-4 gap-4 p-2"
        >
          {product.map((item:any) => (
            <li key={item._id}>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
              />
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </div>
        <h1 className="text-4xl text-dark pl-2 py-4 font-bold">
          Discount
          {/* <FontAwesomeIcon icon={faCaretRight} className="text-RED ml-2" /> */}
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 xl:grid-cols-4 gap-4 p-2"
        >
          {/* {data2.map((product) => (
            <Product product={product} />
          ))} */}
        </div>
      </section>
    </>
  );
};

export default Card;
