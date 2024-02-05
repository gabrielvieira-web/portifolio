import { MyProjectProps } from "interfaces/IProject";
import styles from "./Card.module.css";
import iconChrome from './chrome.svg'
import iconCode from './code.svg'

export const Card = ( { project }: { project: MyProjectProps } ) => {
  return (
    <li key={project.id} className={styles.card}>
      <img
        src={project.image}
        alt="projeto"
        className={styles.imageProject}
      />

      <div className={styles.containerLinks}>
        <a className={styles.linkSite} target="__blank" href={project.pathUrl}>
          <img src={iconChrome} alt="icone do chrome" />
          Site
        </a>

        <a className={styles.linkCode} target="__blank" href={project.pathCode}>
          <img src={iconCode} alt="icone de tag de código" />
          Código
        </a>
      </div>
    </li>
  );
};
