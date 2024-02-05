import styles from './NavigationButton.module.css';
import { Link, useLocation } from 'react-router-dom';

export const NavigationButton = ( { children, to }: {children: string, to: string} ) => {
  const location = useLocation().pathname;

  return (
    <Link 
      to={to}
      className={styles.container} 
      style={
        location !== "/" 
        ? { display: "none" } 
        : { display: 'inline-block' } 
      }
    >
      {children}
    </Link>
  )
}