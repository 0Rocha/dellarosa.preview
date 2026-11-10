export const site = {
  name: "Refúgio Dellarosa",
  tagline: "Chalés em meio à natureza em Itapema — SC",
  description:
    "O Refúgio Dellarosa é um espaço de hospedagem e chalés localizado em meio à natureza, na cidade de Itapema, Santa Catarina.",
  shortLead:
    "Conforto, exclusividade e contato com a Mata Atlântica — a poucos minutos do centro de Itapema.",
  about:
    "Entre a vegetação do Alto Areal, o Refúgio Dellarosa oferece chalés privativos com arquitetura rústica inspirada no conceito de casa na árvore. Um espaço pensado para casais e pequenos grupos que buscam pausa, natureza e aconchego.",
  address: {
    street: "Rua Mata Atlântica",
    neighborhood: "Alto Areal",
    city: "Itapema",
    state: "SC",
    zip: "88220-000",
    full: "Rua Mata Atlântica, Alto Areal, Itapema - SC, 88220-000",
    note: "Aproximadamente 5,7 km do centro da cidade.",
  },
  phone: {
    display: "(47) 99250-4916",
    tel: "+5547992504916",
    e164: "5547992504916",
  },
  maps: {
    link: "https://maps.google.com/?cid=6201172214600827922&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    embed:
      "https://maps.google.com/maps?q=Rua%20Mata%20Atl%C3%A2ntica%20-%20Alto%20Areal%2C%20Itapema%20-%20SC%2C%2088220-000&output=embed",
  },
  profiles: {
    instagram: {
      label: "Cabana Refúgio Dellarosa",
      href: "https://www.instagram.com/explore/search/keyword/?q=Cabana%20Ref%C3%BAgio%20Dellarosa",
    },
    airbnb: {
      label: "Cabana Refúgio Dellarosa",
      href: "https://www.airbnb.com.br/s/Itapema--SC/homes?query=Cabana%20Ref%C3%BAgio%20Dellarosa",
    },
  },
  nav: [
    { href: "#sobre", label: "Sobre" },
    { href: "#acomodacoes", label: "Acomodações" },
    { href: "#comodidades", label: "Comodidades" },
    { href: "#galeria", label: "Galeria" },
    { href: "#localizacao", label: "Localização" },
    { href: "#reserva", label: "Reserva" },
  ],
  chalets: [
    {
      id: "dellarosa",
      name: "Chalé Dellarosa",
      summary:
        "Chalé privativo com arquitetura rústica inspirada em casa na árvore, pensado para casais e pequenos grupos.",
      details: [
        "Unidade privativa em meio à natureza",
        "Arquitetura rústica acolhedora",
        "Ideal para casais e pequenos grupos",
        "Capacidade de até 4 pessoas em algumas unidades",
      ],
      image: {
        src: "/images/chalets/dellarosa-exterior.jpeg",
        alt: "Fachada e deck do Chalé Dellarosa com vista para a floresta",
      },
      secondaryImage: {
        src: "/images/chalets/dellarosa-interior.jpeg",
        alt: "Interior do chalé com banheira de hidromassagem e área de estar",
      },
    },
    {
      id: "mont-verde",
      name: "Chalé Mont' Verde",
      summary:
        "Chalé privativo integrado à vegetação do Alto Areal, com a mesma proposta de conforto e exclusividade do Refúgio.",
      details: [
        "Unidade privativa em meio à natureza",
        "Arquitetura rústica acolhedora",
        "Ideal para casais e pequenos grupos",
        "Capacidade de até 4 pessoas em algumas unidades",
      ],
      image: {
        src: "/images/chalets/mont-verde-exterior.jpeg",
        alt: "Chalé Mont' Verde visto do caminho entre a vegetação",
      },
      secondaryImage: {
        src: "/images/chalets/mont-verde-interior.jpeg",
        alt: "Cozinha equipada e mesa do Chalé Mont' Verde",
      },
    },
  ],
  amenities: [
    { id: "ac", label: "Ar-condicionado" },
    { id: "jacuzzi", label: "Banheira / Jacuzzi privativa" },
    { id: "kitchen", label: "Cozinha equipada" },
    { id: "microwave", label: "Micro-ondas" },
    { id: "fridge", label: "Refrigerador" },
    { id: "garden", label: "Jardim" },
    { id: "parking", label: "Estacionamento" },
  ],
  gallery: [
    {
      src: "/images/gallery/entrada-bem-vindos.jpeg",
      alt: "Entrada do Refúgio com arco de madeira Sejam Bem-Vindos",
    },
    {
      src: "/images/gallery/mesa-vista.jpeg",
      alt: "Mesa de jantar do chalé com luz natural e vista para o verde",
    },
    {
      src: "/images/gallery/deck-rede.jpeg",
      alt: "Deck de madeira com rede e vista para a floresta",
    },
    {
      src: "/images/gallery/vista-por-do-sol.jpeg",
      alt: "Vista do por do sol sobre o vale a partir do Refúgio",
    },
    {
      src: "/images/gallery/trilha-floresta.jpeg",
      alt: "Trilha sombreada entre árvores no entorno do Refúgio",
    },
    {
      src: "/images/gallery/balanco-jardim.jpeg",
      alt: "Balanço de madeira no jardim cercado pela natureza",
    },
    {
      src: "/images/gallery/estacionamento.jpeg",
      alt: "Área de estacionamento Dellarosa sob passarela de madeira",
    },
    {
      src: "/images/gallery/pavao.jpeg",
      alt: "Pavão com plumagem aberta no entorno do Refúgio",
    },
    {
      src: "/images/gallery/capela-noturna.jpeg",
      alt: "Capela iluminada à noite no entorno do espaço",
    },
  ],
  heroImage: {
    src: "/images/hero/hero-exterior.jpeg",
    alt: "Chalé de madeira elevado em meio à Mata Atlântica no Refúgio Dellarosa",
  },
  whatsappMessages: {
    hero: "Olá! Vim pelo site do Refúgio Dellarosa e gostaria de consultar disponibilidade para reserva.",
    float:
      "Olá! Vim pelo site do Refúgio Dellarosa e gostaria de saber mais sobre as acomodações.",
    contact:
      "Olá! Vim pelo site do Refúgio Dellarosa e gostaria de falar sobre uma reserva.",
    chalet: (chaletName: string) =>
      `Olá! Vim pelo site do Refúgio Dellarosa e gostaria de consultar disponibilidade do ${chaletName}.`,
  },
} as const;

export type SiteContent = typeof site;
