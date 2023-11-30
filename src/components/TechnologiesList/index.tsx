import styles from './TechnologiesList.module.css';

import html5 from 'assets/technologies/html5.svg';
import css3 from 'assets/technologies/css3.svg';
import javascript from 'assets/technologies/javascript.svg';
import typescript from 'assets/technologies/typescript.svg'
import react from 'assets/technologies/react.svg';
import sass from 'assets/technologies/sass.svg';
import tailwind from 'assets/technologies/tailwind.svg';
import git from 'assets/technologies/git.svg';
import github from 'assets/technologies/github.svg';

export const TechnologiesList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <img src={html5} alt="imagem da linguagem de marcação HTML5" />
        <span>HTML5</span>
      </li>
      <li>
        <img src={css3} alt="imagem da liguagem de design gráfico CSS3" />
        <span>CSS3</span>
      </li>
      <li>
        <img src={javascript} alt="imagem da liguagem de programação Javascript" />
        <span>JavaScript</span>
      </li>
      <li>
        <img src={typescript} alt="imagem da linguagem de programação typescript" />
        <span>TypeScript</span>
      </li>
      <li>
        <img src={react} alt="imagem da biblioteca React" />
        <span>React</span>
      </li>
      <li>
        <img src={sass} alt="imagem da linguagem de extensão do CSS" />
        <span>Sass</span>
      </li>
      <li>
        <img src={tailwind} alt="imagem do framework CSS tailwind" />
        <span>Tailwind</span>
      </li>
      <li>
        <img src={git} alt="imagem da ferramenta de versionamento de código git" />
        <span>Git</span>
      </li>
      <li>
        <img src={github} alt="imagem da plataforma github que aloja projetos na nuvem" />
        <span>GitHub</span>
      </li>
    </ul>
  )
}