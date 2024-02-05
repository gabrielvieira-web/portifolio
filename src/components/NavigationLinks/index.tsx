import styles from './NavigationLinks.module.css';
import { Link } from './Link';
import { useRecoilValue } from 'recoil';
import { menuActiveState } from 'state/atom';

export const NavigationLinks = () => {
  const menuActive = useRecoilValue(menuActiveState)

  return (
    <nav className={!menuActive ? styles.container : `${styles.container} ${styles.menuActive}`}>
      <Link to="/">
        Inicio
      </Link>
      <Link to="/sobremim">
        Sobre mim
      </Link>
      <Link to="/projetos">
        Projetos
      </Link>
      <Link to="/certificados">
        Certificados
      </Link>
    </nav>
  )
}