import { getDataHome } from "@/utils/actions/get_data";
import { getSubmenu } from "@/utils/actions/get_submenu";
import { HomeProps } from "@/utils/home.type";
import { MenuProps } from "@/utils/menu.type";

import { Phone } from 'lucide-react'

import { Submenu } from "@/components/home/submenu";
import {Services} from '@/components/home/services'
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";



export default async function Home() {
  const  { object }  = await getDataHome()
  console.log(object.title);
  // fetch Submenu
  const menu: MenuProps = await getSubmenu();
  console.log(menu.objects[0].title);


  return (
    <main>
          {menu.objects.length > 0 && <Submenu menu={menu}/>}
           <Hero
              heading={object.metadata.heading}
              buttonTitle={object.metadata.cta_button.title}
              buttonUrl={object.metadata.cta_button.url}
              bannerUrl={object.metadata.banner.url}
              icon={<Phone size={24} color="#fff" />}
       />
       <Container>
          <Services
          object = { object } />
          <Footer  object = {object}/>
       </Container>
   </main>
  );
}
