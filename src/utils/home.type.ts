export interface HomeProps{
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
        };
      };
      services: ServicesPros[];
      contact: {
        email: string;
        phone: string;
        address: string;
        time: string;
      };
    };
  }[];
}

interface ObjctProps {
  object: HomeProps[];
}

interface ServicesPros {
  image: {
    url: string;
  };
  description: string;
}
