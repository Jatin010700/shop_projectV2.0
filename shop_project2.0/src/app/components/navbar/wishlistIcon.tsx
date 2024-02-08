import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faFaceSurprise } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
// import Bar from "./bar";
// import { useRecoilState } from "recoil";
// import Wishlist from "./wishlist";
// import wishListState from "../atoms/wishlistState";
// import "../style/main.css"

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconClick, setIconClick] = useState(false)

//   const [wishCart] = useRecoilState(wishListState);

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
      >
        <motion.div 
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
            <i className={`bi bi-card-checklist cursor-pointer text-2xl ${iconClick ? "text-RED" : "text-white"}`}
            ></i>
        </motion.div>
        <motion.div
          className="bg-dark border-2 border-RED rounded-lg absolute right-0 
          w-full md:w-1/4 h-full md:h-[72%] z-10 p-2 flex flex-col items-center mt-[2.1em] rounded-tr-none overflow-y-auto"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0%)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold pt-2"
          >
            Wishlist
          </motion.h1>

          {/* <Bar /> */}

          <motion.div 
          className="h-full flex flex-wrap gap-2 p-2 justify-center"
          variants={itemVariants}>
            {/* {wishCart.length <= 0 ? (
              <div className="flex flex-col items-center justify-center w-full">
                <h1
                  className="flex gap-2 items-center justify-center
          text-2xl md:text-4xl w-full font-bold h-full"
                >
                  <FontAwesomeIcon icon={faFaceSurprise} className="text-RED" />
                  Empty!!!
                </h1>
                <Bar />
              </div>
            ) : (
              wishCart.map((item) => <Wishlist key={item.id} data={item} />)
            )}

            {wishCart.length > 0 && (
              <>
              <div className="flex flex-col items-center md:items-end w-3/4 mt-10"/>
              <Bar/>
              <div className="flex flex-col items-center md:items-end w-3/4 "/>
              </>
            )} */}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export const NavWishlist = () => {
  return (
    <>
      <div className="flex justify-center  items-center flex-wrap">
        <UserButton />
      </div>
    </>
  );
};
