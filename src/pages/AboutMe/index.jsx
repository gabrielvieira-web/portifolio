import { useLocation } from 'react-router-dom';
import styles from './AboutMe.module.css';
import { NavigationButton } from 'components/NavigationButton';

export const AboutMe = () => {
  const location = useLocation().pathname;

  return (
    <section className={location === "/" ? styles.aboutMeHome : styles.aboutMe}>
      <h2>Sobre mim</h2>

      <div className={styles.containerDescription}>
        <p>Que alegria ter você aqui! Meu nome é Gabriel Vieira da Silva Carvalho e atualmente estudo programação pela Alura. Resolvi estudar desenvolvimento de softwares, com foco em Front-end, e tenho gostado muito dessa área (mais também tenho desejo e vontade de me tornar fullstack) pois você ter autônomia para criar e desenvolver aquilo que quiser, é incrivel. Um exemplo disso é esse portifólio, quem diria, um menino que mal sabia mexer em um computador, fazendo sites...</p>
        <p>Trabalhei em duas empresas, uma como Jovem aprendiz e a outra como estágiario. Foi um tempo muito bom pra mim, pois eu conheci como funciona o mercado de trabalho, aprendi a lidar com pessoas, trabalhar sobre pressão e algo muito importate: dar um BOM DIA faz a diferença no ambiente de trabalho</p>
        <p>Tenho buscado sempre melhorar o meu Javascript e a minha lógica, embora frameworks e bibliotecas sejam algo que facilite o desenvolvimento, eu tento não me apegar só neles para resolver um problema. Sempre busco entender como as coisas funcionam por debaixo dos panos, quero ter várias cartas na manga para resolver os problemas.</p>
      </div>

      <NavigationButton to={"sobremim"}>
        Me conheça mais um pouco
      </NavigationButton>
    </section>
  )
}