import { NavLink } from 'react-router-dom';
import styles from './Link.module.css';

export const Link = ( {children, to}: {children: string, to: string} ) => {
  return (
    <NavLink 
      className={({ isActive }) => isActive ? styles.linkActive : styles.link}
      to={to}
      end
    >
      {children}
    </NavLink>
  )
}