import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import styles from "./index.module.scss";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import cn from "classnames";
import { useDebounce } from "ahooks";

const Navs: FC = (): ReactElement => {
  const router = useRouter();
  const NavItems = [
    { name: "Home", path: "/home" },
    { name: "Posts", path: "/posts" },
    { name: "About", path: "/about" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleMenuIconClick = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.navContainer}>
      <ul className={styles.menuContainer}>
        {NavItems.map((item) => (
          <li
            key={item.name}
            className={cn(styles.menuItem, {
              [styles.isActive]: item.path === router.asPath,
            })}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {/* <Button className={styles.manageBtn} onClick={toggleColorMode}>
        Manage
      </Button> */}
      <HamburgerIcon
        className={styles.menuIcon}
        onClick={handleMenuIconClick}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={handleClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <ul className={styles.drawerMenu}>
              {NavItems.map((item) => (
                <li
                  key={item.name}
                  className={styles.menuItem}
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
  );
};
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleMode = () => {
    toggleColorMode();
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.siteName}>
          <span onClick={handleToggleMode}>
            {colorMode === "dark" ? "🌕" : "🌞"}
          </span>
          <Link href="/home">Moon Will Know</Link>
      </div>
      <Navs />
    </header>
  );
};

export default Header;
