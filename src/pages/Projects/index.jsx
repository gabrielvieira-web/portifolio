import { NavigationButton } from 'components/NavigationButton';
import styles from './Projects.module.css';

import { ProjectCard } from 'components/ProjectCards';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Projetos</h2>

      <ProjectCard />
      
      <NavigationButton to={"projetos"}>
        Ver mais projetos
      </NavigationButton>
    </section>
  )
}