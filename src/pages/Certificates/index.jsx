import { NavigationButton } from 'components/NavigationButton';
import styles from './Certificates.module.css';

import { CertificateCards } from 'components/CertificateCards';

export const Certificates = () => {
  return (
    <section className={styles.certificates}>
      <h2>Certificados</h2>

      <CertificateCards />
      <NavigationButton to={"certificados"}>
        Ver todos certificados
      </NavigationButton>
    </section>
  )
}
