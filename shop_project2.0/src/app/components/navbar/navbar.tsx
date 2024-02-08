"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { NavWishlist } from "./wishlistIcon";
import { ProfileMenu } from "./dropdownMenu";
// import { ProfileMenu } from "./profileMenu";
// import { useRecoilState } from "recoil";
// import { cartState } from "../atoms/cartState";
// import { NavWishlist } from "./NavBarWishlist";
// import wishListState from "../atoms/wishlistState";
// import PagePreloader from "./pagePreloader";

type navbarProps = {
  to: any;
  title: string;
  className: string;
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const CustomLink = ({ to, title, className }: navbarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link href={to} className={`${className} relative group`}>
        <>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className=""
          >
            {title}
            <motion.div
              className="absolute bg-dark rounded-lg border-2 w-28 text-center border-RED z-2 p-2 mt-2"
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% )",
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
              <motion.div variants={itemVariants} className="p-2">
                {/* <Link href='/about'>Laptop</Link>  */}
                Item 1
              </motion.div>
              <motion.div variants={itemVariants} className="p-2">
                Item 2
              </motion.div>
              <motion.div variants={itemVariants} className="p-2">
                Item 3
              </motion.div>
              <motion.div variants={itemVariants} className="p-2">
                Item 4
              </motion.div>
              <motion.div variants={itemVariants} className="p-2">
                Item 5
              </motion.div>
            </motion.div>
          </motion.div>

          <span
            className={`h-[2px] inline-block rounded-full bg-RED absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-400
        ${isHovered ? "w-full" : "w-0"}`}
          />
        </>
      </Link>
    </>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //   const [cartItem] = useRecoilState(cartState);
  //   const [wishCart] = useRecoilState(wishListState);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Unable to load page!!!");
    } finally {
      setIsLoading(false);
    }
  };

  //   const totalQuantity = cartItem.reduce(
  //     (total, item) => total + item.quantity,
  //     0
  //   );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-dark text-white w-full px-4 py-8 flex flex-row items-center justify-between">
        <div className="  duration-150 transition ease-in-out hover:-translate-z-1 hover:scale-125">
          {isLoading ? (
            <>
              {/* <PagePreloader /> */}
              <Link
                href="/"
                className="text-xl font-bold transition ease-in-out duration-150"
              >
                Tech
                <span className="text-RED text-2xl">Shop</span>
              </Link>
            </>
          ) : (
            <Link
              href="/"
              className="text-xl font-bold transition ease-in-out duration-150"
              onClick={handleClick}
            >
              Tech
              <span className="text-RED text-2xl">Shop</span>
            </Link>
          )}
        </div>

        <nav className="hidden gap-2 md:flex md:items-center md:justify-center w-full md:w-auto md:mb-0">
          <CustomLink to="" title="What's New" className="mr-4" />
          {isLoading ? (
            <>
              {/* <PagePreloader /> */}
              <CustomLink to="/Shop_store" title="Store" className="mx-4" />
            </>
          ) : (
            <div className="flex" onClick={handleClick}>
              <CustomLink to="/Shop_store" title="Store" className="mx-4" />
            </div>
          )}

          <CustomLink to="/about" title="About" className="mx-4" />
          <CustomLink to="" title="Contact Us" className="ml-4" />
        </nav>

        <div className="flex gap-3">
          <div>
            <NavWishlist />
            {/* <span className="absolute right-24 top-5 bg-RED px-2 rounded-full">
              {wishCart.length}
            </span> */}
          </div>

          {isLoading ? (
            <>
              {/* <PagePreloader /> */}
              <i className="bi bi-bag-plus-fill cursor-pointer text-2xl hover:text-RED rounded-full scale-105 duration-150 transition ease-in-out hover:-translate-z-1 hover:scale-125"></i>
              {/* <span className="absolute right-14 top-5 bg-RED px-2 rounded-full">
                {totalQuantity}
              </span> */}
            </>
          ) : (
            <Link href="/Cart" onClick={handleClick}>
              <i className="bi bi-bag-plus-fill cursor-pointer text-2xl hover:text-RED rounded-full scale-105 duration-150 transition ease-in-out hover:-translate-z-1 hover:scale-125"></i>
              {/* <span className="absolute right-14 top-5 bg-RED px-2 rounded-full">
                {totalQuantity}
              </span> */}
            </Link>
          )}

          <ProfileMenu />
        </div>
      </div>

      {/* <div className="md:hidden bg-dark">
        <button onClick={handleScrollToTop}>
          <FontAwesomeIcon
            icon={faCaretUp}
            className="fixed bottom-14 right-2 z-50 text-dark bg-RED rounded-full w-10 h-10 scale-105 duration-150"
          />
        </button>
        <button className="text-RED focus:outline-none" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={`fixed bottom-3 right-2 z-50 w-10 h-10 scale-105 duration-150
            ${isMenuOpen ? "block" : "block"}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            className="sm:hidden md:hidden fixed top-0 right-0 flex flex-col justify-between mt-20 w-full z-50 
             rounded-lg text-white bg-dark p-4 border-2 border-RED"
          >
            <div className="flex items-center justify-between">
              <FontAwesomeIcon icon={faBookmark} />
              <CustomLink
                to=""
                title="What's New"
                className="mb-4 font-bold"
                onClick={toggleMenu}
              />
            </div>

            <div className="md:hidden flex items-center justify-between">
              <FontAwesomeIcon icon={faStore} />
              <CustomLink
                to="/Shop_store"
                title="Store"
                className="mb-4 font-bold"
              />
            </div>

            <div className="flex items-center justify-between">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <CustomLink
                to="/about"
                title="About"
                className="mb-4 font-bold"
                onClick={toggleMenu}
              />
            </div>

            <div className="flex items-center justify-between">
              <FontAwesomeIcon icon={faIdCardClip} />
              <CustomLink
                to=""
                title="Contact Us"
                className="font-bold"
                onClick={toggleMenu}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence> */}
    </>
  );
}
