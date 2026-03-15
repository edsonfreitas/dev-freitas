import Image from 'next/image';
import { Metadata } from 'next';
import { Phone } from 'lucide-react'
import styles from './styles.module.scss';

import { PostProps } from '@/utils/post.type';
import {getDataSlug} from '@/utils/actions/get_data_slug';

import { Hero } from '@/components/hero';
import { Container } from '@/components/container';

export async function generateMetadata({ params: { slug } }: {
  params: { slug: string }
}): Promise<Metadata> {

  try{
    const{ objects }: PostProps = await getDataSlug(slug)
    .catch(() =>{
      return {
        title: "DevFreitas - Desenvolvedor Web Full Stack & Especialista em React!",
       description: "Precisa de um site rápido e otimizado? Desenvolvo soluções sob medida utilizando Next.js para velocidade máxima.",
      }
    })

    return{
      title: `DevFreitas - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      openGraph: {
        title: `DevFreitas - ${objects[0].title}`,
        description: `${objects[0].metadata.description.text}`,
        images:[
          objects[0].metadata.banner.url,
        ],
      },
      robots:{
        index: true,
        follow: true,
        nocache: true,
        googleBot:{
          index: true,
          follow: true,
          noimageindex: true,
        }
      }
    }
  }catch(error){
    return {
      title: "DevFreitas - Desenvolvedor Web Full Stack & Especialista em React!",
       description: "Precisa de um site rápido e otimizado? Desenvolvo soluções sob medida utilizando Next.js para velocidade máxima, WordPress para gestão de conteúdo simplificada e Node.js para sistemas robustos. Entre em contato e solicite um orçamento para o seu projeto digital.",

    }
  }
}

export default async function Page({params: { slug } }: {
  params: { slug: string }
}){
  const{ objects }: PostProps = await getDataSlug(slug)
  console.log(JSON.stringify(objects, null, 2))

  return(
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />
      <Container>
          <section className={styles.about}>
            <article className={styles.innerAbout}>
              <h1 className={styles.title}>{objects[0].metadata.description.title}</h1>
              <p>{objects[0].metadata.description.text}</p>

              {objects[0].metadata.description.button_active &&(
                <a href={objects[0].metadata.description.button_url as string}
                target='_blank'
                className={styles.link}>
                  {objects[0].metadata.description.button_title}</a>
              )}
            </article>
            <div className={styles.bannerAbout}>
              <Image
                className={styles.imageAbout}
                alt={objects[0].title}
                quality={100}
                fill={true}
                priority={true}
                src={objects[0].metadata.description.banner.url}
                sizes={"(max-width: 480px): 100vw, (max-width: 124px): 75vw, 60vw"}
              />
            </div>
          </section>
      </Container>
    </>
  )
}
