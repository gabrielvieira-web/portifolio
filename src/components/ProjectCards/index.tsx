import styles from './ProjectCards.module.css';

import { Card } from './Card';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MyProjectProps } from 'shareds/interfaces/IProject';

export const ProjectCard = () => {
  const [ projects, setProjects ] = useState([]);
  const location = useLocation().pathname;

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/gabrielvieira-web/portifolio-api/projects")
      .then(response => response.json())
      .then(data => 
        setProjects(data)
      )
  }, [])

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