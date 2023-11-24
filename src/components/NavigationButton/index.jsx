import styles from './NavigationButton.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useDisplayMenu } from 'context/displayMenu';

export const NavigationButton = ({ children, to }) => {
  const location = useLocation().pathname;
  const { activateRedirectionStateByButton } = useDisplayMenu();

  return (
    <Link 
      to={to} 
      className={styles.container} 
      style={
        location !== "/" 
        ? { display: "none" } 
        : { display: 'inline-block' } 
      }
      onClick={() => activateRedirectionStateByButton()}
    >
      {children}
    </Link>
  )
}