"use client";
import Image from "next/image";

type wishListProps = {
  data: any;
};

export default function WishlistComponent({ data }: wishListProps) {
  const { image, name } = data;

  return (
    <div className=" text-dark w-72 ">
      
    <div className="relative">
        <Image
        src={image}
        alt=""
        width={100}
        height={100}
        className="w-full rounded-3xl mb-2"
      />
      <i className="bi bi-x-circle-fill absolute top-5 right-5 text-2xl text-RED"></i>
    </div>
        

      <h1 className="text-dark font-bold text-center uppercase text-2xl pb-2">
        {name}
      </h1>
    </div>
  );
}

//issues
//need to fix close button
