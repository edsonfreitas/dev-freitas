import styles from './styles.module.scss';
import { Mail, Map, Phone, Clock } from 'lucide-react';

// Definindo a interface baseada na estrutura real dos dados que você consome
interface FooterProps {
  object: {
    metadata: {
      contact: {
        email: string;
        phone: string;
        time: string;
        address: string;
      };
      cta_button: {
        url: string;
        title: string;
      };
    };
  };
}

export function Footer({ object }: FooterProps) {
  return (
    <footer className={styles.footer} id='contatos'>
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>

        <div className={styles.content}>
          <div className={styles.item}>
            <Mail size={28} color='#fff' />
            <div>
              <strong>Email:</strong>
              <p>{object.metadata.contact.email}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Phone size={28} color='#fff' />
            <div>
              <strong>Telefone:</strong>
              <p>{object.metadata.contact.phone}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Clock size={28} color='#fff' />
            <div>
              <strong>Horário de Funcionamento:</strong>
              <p>{object.metadata.contact.time}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Map size={28} color='#fff' />
            <div>
              <strong>Endereço:</strong>
              <p>{object.metadata.contact.address}</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href={object.metadata.cta_button.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <Phone size={24} color='#fff' />
        {object.metadata.cta_button.title}
      </a>
    </footer>
  );
}
