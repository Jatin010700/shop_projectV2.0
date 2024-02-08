import React, { useState } from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faWallet,
//   faRectangleList,
//   faCircleChevronUp,
// } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
// import Bar from "./bar";
// import { Login } from "./login";
// import { Register } from "./register";
// import Logout from "./logout";
// import UserState from "../atoms/UserState";
// import { useRecoilValue } from "recoil";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

type dropdownMenuProps = {
  title: any;
  para: string;
  link: any;
  link1: any;
  authButton: any;
  button1: any;
};

const UserButton = ({
  title,
  para,
  link,
  link1,
  authButton,
  button1,
}: dropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconClick, setIconClick] = useState(false);

  //   const { isLoggedIn } = useRecoilValue(UserState);

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="inline-block"
      >
        <motion.div
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className="inline-flex"
        >
          <i
            className={`bi bi-caret-up-fill cursor-pointer text-2xl ${
              iconClick ? "text-RED" : "text-white"
            }`}
          ></i>
          {/* <FontAwesomeIcon
            icon={faCircleChevronUp}
            onClick={() => {setIconClick(!iconClick)}}
            className={`cursor-pointer text-2xl ${iconClick ? "text-RED" : "text-white"}`}/> */}
        </motion.div>

        <motion.div
          className="bg-dark border-2 border-RED rounded-lg absolute right-0 
                    w-full md:w-1/4 h-[65.2%] md:h-[72%] z-10 p-2 flex flex-col items-center mt-[2.1em] md:rounded-tr-none"
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
            {title}
          </motion.h1>

          {/* <Bar /> */}

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center w-3/4 "
          >
            <motion.p
              variants={itemVariants}
              className="flex items-center justify-between w-3/4 font-bold text-xl"
            >
              {/* {isLoggedIn && (
                <FontAwesomeIcon icon={faUser} className="text-RED" />
              )}
              {para} */}
            </motion.p>

            {/* {isLoggedIn && <Bar />} */}

            <motion.span
              variants={itemVariants}
              className="flex items-center justify-between w-3/4"
            >
              {/* <FontAwesomeIcon icon={faWallet} className="text-RED" /> */}
              <Link href="" className="hover:text-RED">
                {link}
              </Link>
            </motion.span>

            <motion.span
              variants={itemVariants}
              className="flex items-center justify-between w-3/4"
            >
              {/* <FontAwesomeIcon icon={faRectangleList} className="text-RED" /> */}
              <Link href="" className="hover:text-RED">
                {link1}
              </Link>
            </motion.span>
          </motion.div>

          {/* <Bar /> */}
          <div className="flex gap-2">
            <motion.div variants={itemVariants} className="cursor-pointer">
              {authButton}
            </motion.div>

            <motion.div variants={itemVariants} className="cursor-pointer">
              {button1}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export const ProfileMenu = () => {
  //   const { isLoggedIn, userName } = useRecoilValue(UserState);

  return (
    <>
      <div className="flex justify-center  items-center flex-wrap">
        <UserButton
          title="Account"
          //   para={isLoggedIn ? `${userName}` : ""}
          link="Billing"
          link1="History"
          //   authButton={isLoggedIn ? <Logout /> : <Login />}
          //   button1={<Register />}
          //   username={userName}
        />
      </div>
    </>
  );
};
