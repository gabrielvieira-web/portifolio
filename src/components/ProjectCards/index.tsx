import styles from './ProjectCards.module.css';

import { Card } from './Card';
import projects from './projects.json';
import { useLocation } from 'react-router-dom';
import { MyProjectProps } from 'shareds/interfaces/IProject';

export const ProjectCard = () => {
  const location = useLocation().pathname;

  return (
    <>
      <ul className={styles.list}>
        {location === "/" ? 
          projects.map((project: MyProjectProps) => {
            if(project.id <= 4) {
              return (
                <Card key={project.id} project={project} />
              )
            }
          }) 
        : 
          projects.map((project: MyProjectProps) => {
            return (
              <Card key={project.id} project={project} />
            )
          })
        }
      </ul>
    </>
  )
}