import styles from './CertificateCards.module.css';

import { useLocation } from 'react-router-dom';
import { Card } from './Card';
import { useEffect, useState } from 'react';

export const CertificateCards = () => {
  const [ certificates, setCertificates ] = useState([])
  const location = useLocation().pathname;

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/gabrielvieira-web/portifolio-api/certificates")
      .then(response => response.json())
      .then(data => 
        setCertificates(data)  
      )
  }, [])

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