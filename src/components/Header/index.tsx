import styles from './Header.module.css';
import avatar from 'assets/avatar.jpeg';
import { NavigationLinks } from 'components/NavigationLinks';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { menuActiveState } from 'state/atom';

export const Header = () => {
  const menuActive = useRecoilValue(menuActiveState);
  const displayMenu = useSetRecoilState(menuActiveState);

  return (
    <header className={styles.header}>
        <img src={avatar} alt="logo avatar do desenvolvedor Gabriel Vieira" className={styles.avatar}/>

        <button
          className={styles.button}
          onClick={() => displayMenu(currentValue => !currentValue)}
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