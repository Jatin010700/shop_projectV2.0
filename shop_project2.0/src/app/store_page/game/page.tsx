"use client";
import Preloader from "@/app/components/extra/preloader";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchInputDiv from "./searchDiv";

interface StoreModel {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type StoreProps = {
  product: StoreModel[];
};

const Game: React.FC<StoreProps> = () => {
  const [products, setProducts] = useState<StoreModel[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [isLoading, setIsLoading] = useState(false);

  const filteredItems = products.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const currentProducts = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/getStoreAllContent");
        setProducts(res.data);
        console.log("Store data fetch");
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
      <SearchInputDiv 
      handleSearchProps={ (e:any) => setSearchTerm(e.target.value)}
      searchTermProps={searchTerm}/>
      <div className="h-1 bg-RED" />
      <section className="bg-white px-4 pb-4">
        <div className="w-full flex justify-center items-center pb-4">
          <h1 className="text-4xl text-center w-full md:w-1/2 bg-RED p-4 text-dark font-bold rounded-b-full">
            Games
          </h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 xl:grid-cols-4 gap-4 p-2"
        >
          {currentProducts.map((item: StoreModel) => (
            <>
              {isLoading ? (
                <Preloader
                  key={`preloader-${item._id}`}
                  className="flex justify-center p-10"
                  preloaderSize="30"
                  preloaderColor="#ff3333"
                />
              ) : (
                <>
                  <div
                    key={item._id}
                    className=" rounded-3xl relative"
                  >
                    {/* wishlist  buttom */}
                    <button>
                      <i className="bi bi-suit-heart-fill text-2xl ml-2 bg-dark text-white px-[9px] py-1 rounded-tr-3xl rounded-bl-3xl absolute right-0 top-0 shadow-xl"></i>
                    </button>
                    <div className="flex flex-col items-center gap-1 py-1">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={100}
                        className="w-3/4"
                      />
                      <h2 className="text-dark text-xl p-2 font-bold uppercase">
                        {item.name}
                      </h2>

                      <p className="font-bold text-dark text-lg">
                        Price:
                        <span className="text-RED">
                          {" "}
                          ${item.price}
                          <i className="bi bi-tags-fill ml-1"></i>
                        </span>
                      </p>

                      <div></div>
                      <button className="bg-dark rounded-full font-bold !border-none focus:ring-0  hover:scale-105 duration-150 w-3/4 p-2">
                        Add to Cart
                        <i className="bi bi-bag-plus-fill ml-1"></i>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
        <div className="p-2 font-bold flex justify-center items-center gap-2">
          {/* <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faCaretLeft} className="text-RED text-2xl" />
          </button>
          <span className="text-dark bg-RED py-2 px-3 rounded-full">{currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= filteredItems.length}>
            <FontAwesomeIcon icon={faCaretRight} className="text-RED text-2xl" />
          </button> */}
        </div>
      </section>
      {/* <Subscribe/> */}
    </>
  );
};

export default Game;
