import { HomeProps } from '@/utils/home.type';
import styles from './styles.module.scss';
import Image from 'next/image';

export function Services({ object }: { object: HomeProps['objects'][0] }) {
  return(
    <>
    <section className={styles.containerAbout} id='servicos'>
      <article className={styles.innerAbout}>
        <h1 className={styles.title}>Sobre</h1>
        <p>{object.metadata.about.description}</p>
      </article>

      <div className={styles.bannerAbout}>
        <Image
          className={styles.imageAbout}
          src={object.metadata.about.banner.url}
          alt='imagem ilustrativa sobre a empresa'
          quality={100}
          fill={true}
          sizes={"(max-width: 480px): 100vw, (max-width: 124px): 75vw, 60vw"}
        />
      </div>
    </section>

    <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

    <section className={styles.services}>

      {object.metadata.services.map(service => (
        <article key={service.description} className={styles.service}>
          <div className={styles.innerService}>
            <Image
              className={styles.imageService}
              src={service.image.url}
              alt='imagem do serviço'
              quality={100}
              fill={true}
              sizes={"(max-width: 480px): 100vw, (max-width: 124px): 75vw, 60vw"}
            />
          </div>
          <p>{service.description}</p>

        </article>
      ))}
    </section>

    </>
  )
}
