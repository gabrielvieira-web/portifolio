import { useDisplayMenu } from 'context/displayMenu';
import styles from "./Banner.module.css";

export const Banner = () => {
  const { menuActive } = useDisplayMenu();

  return (
    <div 
      className={!menuActive ? styles.container : `${styles.container} ${styles.menuActive}`}
    >
      <div>
        <h1>Desenvolvedor <span>Front-end</span></h1> 
      </div>
    </div>
  )
}