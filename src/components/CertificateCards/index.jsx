import styles from './CertificateCards.module.css';
import { useLocation } from 'react-router-dom';

import certificates from 'json/certificates.json';
import { Card } from './Card';

export const CertificateCards = () => {
  const location = useLocation().pathname;

  return (
    <>
      <ul className={styles.list}>
        {location === '/' ?
          certificates.map(certificate => {
            if(certificate.id <= 2) {
              return (
                <Card key={certificate.id} certificate={certificate}/>
              )
            }
          })
        : 
          certificates.map(certificate => {
            return (
              <Card key={certificate.id} certificate={certificate} />
            )
          })
        }
      </ul>
    </>
  )
}