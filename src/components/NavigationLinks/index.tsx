import styles from './NavigationLinks.module.css';
import { Link } from './Link';
import { useDisplayMenu } from 'context/displayMenu';

export const NavigationLinks = () => {
  const { menuActive } = useDisplayMenu();

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