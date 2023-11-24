import styles from './Home.module.css';

import { AboutMe } from 'pages/AboutMe';
import { TechnologiesList } from 'components/TechnologiesList';
import { Projects } from 'pages/Projects';
import { Certificates } from 'pages/Certificates';

export const Home = () => {
  return (
    <>
      <AboutMe />

      <section className={styles.technologies}>
        <h2>Tecnologias</h2>

        <TechnologiesList />
      </section>

      <Projects />

      <Certificates />
    </>
  )
}