import { useState } from 'react';
import { DivStylized } from './DivStylized';

import whatsapp from './whatsapp.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import github from 'assets/social/github-black.svg';
import curriculum from './curriculum.svg';
import iconArrow from './arrowup.svg';
import curriculumPdf from 'assets/curriculum.pdf';

export const SocialList = () => {
  const [ isActive, useIsActive ] = useState(false);
  
  const displayItens = () => {
    useIsActive(!isActive)
  }

  return (
    <DivStylized $listActive={isActive}>
      <div>
        <span
          onClick={() => displayItens()}
        >
          <img src={iconArrow} alt="icone de seta" />
        </span>

        <ul>
          <li>
            <a 
              target="__blank" 
              href="https://wa.me/5511952334908?text=Ol%C3%A1+Gabriel%2C+vim+pelo+seu+portf%C3%B3lio"
            >
              <img src={whatsapp} alt="icone de whatsapp" />
            </a>
          </li>
          <li>
            <a 
              target="__blank" 
              href="https://www.instagram.com/__vieira010__/"
            >
              <img src={instagram} alt="icone do instagram" />
            </a>
          </li>
          <li>
            <a 
              target="__blank" 
              href="https://www.linkedin.com/in/gabriel-carvalho070405/"
            >
              <img src={linkedin} alt="icone do linkedin" />
            </a>
          </li>
          <li>
            <a 
              target="__blank" 
              href="https://github.com/gabrielvieira-web"
            >
              <img src={github} alt="icone do github" />
            </a>
          </li>
          <li>
            <a
              href={curriculumPdf}
              download={curriculumPdf}
              type='application/pdf'
            >
              <img src={curriculum} alt="icone de curriculo" />
            </a>
          </li>
        </ul>
      </div>
    </DivStylized>
  )
}