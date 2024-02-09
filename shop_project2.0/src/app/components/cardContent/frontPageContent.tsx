// Card.tsx
"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Product from "./productContent";
import Preloader from "../extra/preloader";

interface MongooseModel {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type CardProps = {
  product: MongooseModel[];
};

const Card: React.FC<CardProps> = () => {
  const [products, setProducts] = useState<MongooseModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("isLoading:", isLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/getMongoDBContent");
        setProducts(res.data);
        console.log("Data fetch ;D");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <>
      <section className="bg-white px-4 pb-8">
        <div className="w-full flex justify-center items-center pb-4">
          <h1 className="text-4xl text-center w-1/2 bg-RED p-4 text-dark font-bold rounded-b-full">
            New In Store
          </h1>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 xl:grid-cols-4 gap-4 p-2"
        >
          {products.slice(0, 8).map((item: MongooseModel) => (
            <li key={item._id} className="flex flex-col">
              {isLoading ? (
                <Preloader key={`preloader-${item._id}`} className="flex justify-center" />
              ) : (
                <>
                  <Image
                    src={item.image}
                    alt=""
                    width={100}
                    height={100}
                    className="w-full rounded-3xl"
                  />
                  <div className="flex flex-col items-center gap-1 py-1">
                    <h2 className="text-dark text-xl font-bold uppercase">
                      {item.name}
                    </h2>
                    <p className="text-dark">Price: ${item.price}</p>
                  </div>
                  <Product />
                </>
              )}
            </li>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
