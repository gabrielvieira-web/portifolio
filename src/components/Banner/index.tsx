import { useRecoilValue } from "recoil";
import styles from "./Banner.module.css";
import { menuActiveState } from "state/atom";

export const Banner = () => {
  const menuActive = useRecoilValue(menuActiveState);

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