import styles from './CertificateCards.module.css';
import certificates from './certificates.json';
import { useLocation } from 'react-router-dom';
import { MyCertificateProps } from 'shareds/interfaces/ICertificate';
import { Card } from './Card';


export const CertificateCards = () => {
  const location = useLocation().pathname;

  return (
    <>
      <ul className={styles.list}>
        {location === '/' ?
          certificates.map((certificate: MyCertificateProps) => {
            if(certificate.id <= 2) {
              return (
                <Card key={certificate.id} certificate={certificate} />
              )
            }
          })
        : 
          certificates.map((certificate: MyCertificateProps) => {
            return (
              <Card key={certificate.id} certificate={certificate} />
            )
          })
        }
      </ul>
    </>
  )
}