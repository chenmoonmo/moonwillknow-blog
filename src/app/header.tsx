"use client";
import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useColorMode,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavItems = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
  { name: "About", path: "/about" },
] as const;

export const Header = () => {
  const pathName = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMenuIconClick = () => {
    setIsOpen(true);
  };

  const handleToggleMode = () => {
    toggleColorMode();
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
  };

  return (
    <header className="sticky bg-white bg-opacity-90 backdrop-blur shadow-sm top-0 h-16 px-5 flex flex-row items-center justify-between z-50 md:px-10 w-screen dark:bg-slate-800">
      <div className="cursor-pointer flex flex-row items-center font-bold text-xl md:text-3xl">
        <span className="mr-2 select-none" onClick={handleToggleMode}>
          {colorMode === "dark" ? "🌕" : "🌞"}
        </span>
        <Link href="/">Moon Will Know</Link>
      </div>
      <div className="flex items-center relative">
        <ul className="hidden absolute flex-col gap-3 items-center right-0 top-10 bg-transparent md:flex md:relative md:flex-row md:top-0">
          {NavItems.map((item) => (
            <li
              key={item.name}
              className={`font-bold text-xl  cursor-pointer select-none hover:text-green-600 ${
                item.path === pathName ? "text-green-600" : ""
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <span className="md:hidden">
        <HamburgerIcon
          className="w-8 h-10 ml-2 cursor-pointer"
          onClick={handleMenuIconClick}
        />
        </span>
       
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={handleClose}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <ul className="flex flex-col gap-3 pt-8 text-3xl font-bold">
                {NavItems.map((item) => (
                  <li
                    key={item.name}
                    className={`font-bold text-xl cursor-pointer select-none hover:text-green-600 ${
                      item.path === pathName ? "text-green-600" : ""
                    }`}
                    onClick={handleClose}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};
