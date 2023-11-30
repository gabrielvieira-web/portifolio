import styles from './PageTemplate.module.css';

import { Outlet } from "react-router-dom"
import { Header } from "components/Header"
import { Footer } from "components/Footer"
import { Banner } from 'components/Banner';

import { SocialList } from 'components/SocialList';
import { useDisplayMenu } from 'context/displayMenu';

export const PageTemplate = () => {
  const { menuActive } = useDisplayMenu();

  return (
    <>
      <Header />
      <Banner />

      <main className={!menuActive ? styles.container : `${styles.container} ${styles.menuActive}`}>
        <Outlet />

        <SocialList />
      </main>

      <Footer />
    </>
  )
}