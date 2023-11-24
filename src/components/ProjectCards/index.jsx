import { useLocation } from 'react-router-dom';
import styles from './ProjectCards.module.css';
import projects from 'json/projects.json'
import { Card } from './Card';

export const ProjectCard = () => {
  const location = useLocation().pathname;

  return (
    <>
      <ul className={styles.list}>
        {location === "/" ? 
          projects.map(project => {
            if(project.id <= 4) {
              return (
                <Card key={project.id} project={project} />
              )
            }
          }) 
        : 
          projects.map(project => {
            return (
              <Card key={project.id} project={project} />
            )
          })
        }
      </ul>
    </>
  )
}