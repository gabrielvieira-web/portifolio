import styles from "./Card.module.css";
import { MyCertificateProps } from "interfaces/ICertificate";


export const Card = ( {certificate}: {certificate: MyCertificateProps} ) => {
  return (
    <li className={styles.card}>
      <img
        src={certificate.image}
        alt={`certificado do curso: ${certificate.course}`}
      />

      <div className={styles.containerDescription}>
        <h3>{certificate.course}</h3>

        <a target="__blank" href={certificate.pathUrl}>
          Ver certificado
        </a>
      </div>
    </li>
  );
};
