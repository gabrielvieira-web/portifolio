import styles from './Footer.module.css';

import whatsapp from 'assets/social/whatsapp.svg';
import linkedin from 'assets/social/linkedin.svg';
// import instagram from 'assets/social/instagram.svg';
import githubWhite from 'assets/social/github-white.svg';
import copyhight from './copyhight.svg';

import avatar from 'assets/avatar.jpeg';

import { NavigationLinks } from 'components/NavigationLinks';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerNavigation}>
        <img src={avatar} alt="imagem do avatar Gabriel vieira" />
        
        <NavigationLinks />

        <ul className={styles.listContact}>
          <li>Contato</li>
          <li>(11) 95233-4908</li>
          <li>gc040705@gmail.com</li>
        </ul>

        <ul className={styles.listSocial}>
          <li>
            <a target="__blank" href="https://wa.me/5511952334908?text=Ol%C3%A1+Gabriel%2C+vim+pelo+seu+portf%C3%B3lio">
              <img src={whatsapp} alt="icone da rede social whatsapp" />
            </a>
          </li>
          <li>
            <a target="__blank" href="https://www.linkedin.com/in/gabriel-carvalho070405/">
              <img src={linkedin} alt="icone da rede social linkedin" />
            </a>
          </li>
          <li>
            <a target="__blank" href="https://www.instagram.com/__vieira010__/">
              <img src={instagram} alt="icone da rede social instagram" />
            </a>
          </li>
          <li>
            <a target="__blank" href="https://github.com/gabrielvieira-web">
              <img src={githubWhite} alt="icone da rede social GitHub" />
            </a>
          </li>
        </ul>

      </section>

      <p>
        <img src={copyhight} alt="icone de direitos autorais" />
        Desenvolvido por Gabriel Vieira
      </p>
    </footer>
  )
}