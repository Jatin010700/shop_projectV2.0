"use client";

import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-dark rounded-full font-bold"
      >
        View More
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        
        <div className="text-dark flex justify-between px-4 pt-2">
          <h1 className="text-2xl font-bold uppercase">hello</h1>
          <button onClick={() => setOpenModal(false)}>
            <i
              className="bi bi-x-circle-fill text-2xl hover:text-RED
           scale-105 duration-150"
            ></i>
          </button>
        </div>

        <div>
          <Image src="" alt="" width={100} height={100}/>

          <p></p>
        </div>

      </Modal>
    </>
  );
};

export default Product;
