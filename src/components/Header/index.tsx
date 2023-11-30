import styles from './Header.module.css';
import avatar from 'assets/avatar.jpeg';
import { NavigationLinks } from 'components/NavigationLinks';
import { useDisplayMenu } from 'context/displayMenu';

export const Header = () => {
  const { displayMenu, menuActive } = useDisplayMenu();

  return (
    <header className={styles.header}>
        <img src={avatar} alt="logo avatar do desenvolvedor Gabriel Vieira" className={styles.avatar}/>

        <button
          className={styles.button}
          onClick={() => displayMenu()}
        >
          <span 
            className={
              !menuActive 
              ? styles.menuHamburger 
              : `${styles.menuHamburger} ${styles.menuHamburgerActive}` 
            }></span>
        </button>

        <NavigationLinks />
    </header>
  )
}