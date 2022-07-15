import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import styles from './index.module.scss'
const Navs = () => {
  const navs = [
    { name: 'Home', path: '/home' },
    { name: 'Labels', path: '/labels' },
    { name: 'About', path: '/about' },
  ]
  const [menuState, setmenuState] = useState(false)

  const test = () => setmenuState(!menuState)

  return (
    <div className={styles.navContainer}>
      <div className={menuState ? styles.menuContainer : styles.unshow}>
        {navs.map((item) => (
          <div key={item.name} className={styles.menuItem}>
            <Link href={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className={styles.manageBtn}>
        <Link href={`/login`}>Manage</Link>
      </div>
      <ul className="w-8 ml-2 cursor-pointer md:hidden" onClick={test}>
        <li className="bg-black h-1 "></li>
        <li className="bg-black h-1 my-1"></li>
        <li className="bg-black h-1 "></li>
      </ul>
    </div>
  )
}
const Header = () => {
  return (
    <div className="sticky bg-white shadow-sm top-0 h-16 px-5 md:px-10 flex flex-row items-center justify-between z-50">
      <div className="cursor-pointer flex flex-row items-center">
        {/* <Image src="/pokemon.png" height="30px" width="30"></Image> */}
        <span className="font-bold text-xl md:text-3xl">Thyme Blog</span>
      </div>
      <Navs></Navs>
    </div>
  )
}

export default Header
