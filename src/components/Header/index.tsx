import Link from 'next/link'
import { FC, ReactElement, useState } from 'react'
import styles from './index.module.scss'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navs: FC = (): ReactElement => {
  const NavItems = [
    { name: 'Home', path: '/home' },
    { name: 'Posts', path: '/posts' },
    { name: 'About', path: '/about' },
  ]
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }
  const handleMenuIconClick = () => {
    setIsOpen(true)
  }

  return (
    <div className={styles.navContainer}>
      <ul className={styles.menuContainer}>
        {NavItems.map((item) => (
          <li key={item.name} className={styles.menuItem}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Button className={styles.manageBtn}>
        <Link href="/login">Manage</Link>
      </Button>
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
                <li key={item.name} className={styles.menuItem}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.siteName}>
        <Link href="/home">
          <span>🌕 Moon Will Know</span>
        </Link>
      </div>
      <Navs />
    </header>
  )
}

export default Header
