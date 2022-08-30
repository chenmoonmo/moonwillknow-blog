import Link from 'next/link';
import { FC, ReactElement, useState } from 'react';
import styles from './index.module.scss';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import cn from 'classnames';

const NavItems = [
  { name: 'Home', path: '/' },
  { name: 'Posts', path: '/posts' },
  { name: 'About', path: '/about' },
] as const;

const Navs: FC = (): ReactElement => {
  const router = useRouter();
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
      <HamburgerIcon className={styles.menuIcon} onClick={handleMenuIconClick} />
      <Drawer isOpen={isOpen} placement='right' onClose={handleClose} size='xs'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <ul className={styles.drawerMenu}>
              {NavItems.map((item) => (
                <li
                  key={item.name}
                  className={cn(styles.menuItem, {
                    [styles.isActive]: item.path === router.asPath,
                  })}
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
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.siteName}>
        <span onClick={handleToggleMode}>{colorMode === 'dark' ? '🌕' : '🌞'}</span>
        <Link href='/'>Moon Will Know</Link>
      </div>
      <Navs />
    </header>
  );
};

export default Header;
