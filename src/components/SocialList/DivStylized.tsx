import styled from 'styled-components';

interface DivStylizedProps {
  $listActive: boolean
}

export const DivStylized = styled.div<DivStylizedProps>`
  position: absolute;
  width: 5%;
  left: 0;
  bottom: 16%;
  background-color: var(--color-white);
  border-radius: 0 .1rem 1.5rem 0;
  
  box-shadow: rgba(0, 0, 0, 0.2) 0px 50px 40px -7px;

  div {
    position: relative;
    width: 100%;
  }

  span {
    display: none;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 0;

    li {
      list-style-type: none;

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      img {
        width: 30px;
        transition: .2s ease-in-out;
      }:hover {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 7%;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 18%;
    height: ${props => props.$listActive ? '20rem' : '4.2rem'};
    bottom: 4%;
    left: 80%;
    border-radius: 0 0 .5rem .5rem;
    transition: .4s ease-in-out;
    
    div {
      height: 100%;
    }

    span {
      display: block;
      position: absolute;
      top: -1.8rem;
      width: 100%;
      padding: .2rem 0;
      background-color: var(--color-background-tertiary);
      text-align: center;
      border-radius: .5rem .5rem 0 0;
      transition: .4s ease-in-out;
      cursor: pointer;
    }

    ul {
      padding: 1rem 0;
      position: absolute;
      justify-content: space-between;
      flex-direction: column-reverse;
      overflow-y: hidden;
      height: 100%;

      li img {
        width: 2.3rem;
      }
    }

    span img {
      width: 20px;
      rotate: ${ props => props.$listActive ? '180deg' : '360deg'};
    }
  }
`