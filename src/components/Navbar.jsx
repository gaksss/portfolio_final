import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Ajout de l'import
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo, logotext } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  const menuVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        stiffness: 80,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          /> */}
          <h2 className="text-eerieBlack hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            Clément
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex justify-end items-center">
          <AnimatePresence>
            {toggle && (
              <motion.div
                className="fixed left-0 top-0 w-full h-screen bg-flashWhite"
                style={{ overflowX: "hidden" }}
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="flex justify-end p-6">
                  <img
                    src={close}
                    alt="close"
                    className="w-[22px] h-[22px] object-contain cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                  />
                </div>
                <ul className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-8">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-french" : "text-eerieBlack"
                      } text-[32px] font-bold font-mova uppercase tracking-[1px] cursor-pointer transition-colors duration-300 hover:text-taupe`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          {!toggle && (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
