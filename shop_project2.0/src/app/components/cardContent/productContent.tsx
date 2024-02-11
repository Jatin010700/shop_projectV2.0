"use client";
// Product.tsx
import { Button, CustomFlowbiteTheme, Flowbite, Modal } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

interface MongooseModel {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type ProductProps = {
  product: MongooseModel;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-dark rounded-full font-bold !border-none focus:ring-0  hover:scale-105 duration-150"
      >
        View More
      </Button>

      <Modal
        dismissible
        show={openModal}
        size="4xl"
        onClose={() => setOpenModal(false)}
      >
        <div className="p-4">
          <div className="text-dark flex justify-end">
            <button onClick={() => setOpenModal(false)}>
              <i className="bi bi-x-circle-fill text-2xl hover:text-RED scale-105 duration-150"></i>
            </button>
          </div>

          <div className="text-dark flex gap-4">
            <Image
              src={product.image}
              alt=""
              width={100}
              height={100}
              className="w-1/2 rounded-3xl"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold uppercase">{product.name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto inventore voluptatum nostrum atque, corrupti, vitae
                esse id accusamus dignissimos neque ..
              </p>
              <p>Price: ${product.price}</p>
              <button className="bg-dark text-white rounded-full font-bold border-2 border-RED py-2">
                Add to Cart <i className="bi bi-bag-plus-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Product;
