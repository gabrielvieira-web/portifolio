import styles from './PageNotFound.module.css';
import { FaFaceSmileWink } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerDescription}>
          <span>404</span>
          <p>Ops! Página não encontrada</p>
          <p>Mais fique tranquilo, clique no botão abaixo, e está tudo resolvido<FaFaceSmileWink /></p>

          <button
            onClick={() => navigate("/")}
          >
            Página Principal
          </button>
        </div>
      </div>
    </>
  )
}