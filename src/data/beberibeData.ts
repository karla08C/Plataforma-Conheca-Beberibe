export interface Attraction {
  id: string;
  title: string;
  district: string;
  tag: string;
  tagColor: "primary" | "secondary" | "tertiary";
  description: string;
  distance: string;
  duration: string;
  image: string;
  imageAlt: string;
  category: string;
}

export interface Commerce {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  district: string;
  districtSlug: string;
  description: string;
  locationDetails: string;
  image: string;
  whatsapp: string;
  phone?: string;
  rating?: number;
  reviewsCount?: number;
  verified: boolean;
  actionText: string;
  actionIcon: string;
}

export interface ItineraryDay {
  period: string;
  title: string;
  description: string;
  tip: string;
}

export interface Itinerary {
  id: string;
  days: number;
  title: string;
  tagline: string;
  schedule: ItineraryDay[];
}

export interface LocalEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}

export const DISTRICTS = [
  { id: "todos", label: "Todos" },
  { id: "morro-branco", label: "Morro Branco" },
  { id: "praia-das-fontes", label: "Praia das Fontes" },
  { id: "lagoa-do-uruau", label: "Lagoa do Uruaú" },
  { id: "centro", label: "Centro" },
  { id: "paripueira", label: "Paripueira" },
  { id: "sucatinga", label: "Sucatinga" },
];

export const CATEGORIES = [
  { id: "todas", label: "Todas" },
  { id: "praias", label: "Praias & Falésias" },
  { id: "buggy", label: "Passeio de Buggy" },
  { id: "barracas", label: "Barracas de Praia" },
  { id: "pousadas", label: "Pousadas" },
  { id: "gastronomia", label: "Peixe & Frutos do Mar" },
  { id: "artesanato", label: "Rendas & Artesanato" },
];

export const HIGHLIGHTS: Attraction[] = [
  {
    id: "falesias-morro-branco",
    title: "Monumento Natural das Falésias",
    district: "Morro Branco",
    tag: "Preservação Ambiental",
    tagColor: "primary",
    description: "Labirinto natural escavado pela erosão com areias de 12 tonalidades minerais preservadas.",
    distance: "4,5 km do centro",
    duration: "1h30 a 2h",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa0UjitalrdCuR5OoHur9CNStux_kQc6Hnh6uNOm1Yfu0c_H1iHxl2yj4AMSKPvwQG6dQeQTo2Muy_R5eEKGco6AffMWa5mUcFAoVPZFJje_o6Bzd3F9KGG39QZB1PZa1VccUAS_gGEUNmGQagBIZdVjWKYfGhB9rYrKHb-e1nHl31i-yEuYV-tWCwdX0DVvuO1M51UVPj5pYL2yrDToNqwAxFT56GA5SU_kBxzJtK2B-KiSnjxWCg",
    imageAlt: "Falésias de areia colorida de Morro Branco com mar azul ao fundo",
    category: "praias",
  },
  {
    id: "gruta-mae-dagua",
    title: "Gruta da Mãe D'Água & Bicas",
    district: "Praia das Fontes",
    tag: "Pé na areia",
    tagColor: "secondary",
    description: "Bicas naturais de água doce potável vertendo direto das falésias e cavernas marítimas lendárias.",
    distance: "6 km do centro",
    duration: "Livre",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTGwtflm3cJe6KLtRDkJHOBytu0Toxm9PF97zd6-ChlESKXe-oijuWCB9L6ZRbIUD22-EZB_xugU0yHsgyZ5wMB0SZ2b3mIfL73BpK34wM_gwVePIQUivNeRW7yjaq6YWFoz9-hIz73lQeBJqQ6T-y9vmlGLljOMd8ZX1yNigEOAun9xrCMfAzReTCD7fKUUzsb6rMIfxPT0_mWPyImz6N-VgpgV4GMEpl3KB5uiJiZrf4K6rowla4",
    imageAlt: "Gruta da Mãe D'Água na Praia das Fontes com água doce escorrendo",
    category: "praias",
  },
  {
    id: "lagoa-do-uruau",
    title: "Lagoa do Uruaú",
    district: "Uruaú",
    tag: "Água Doce & Lazer",
    tagColor: "tertiary",
    description: "A maior lagoa do Ceará, ideal para esportes náuticos, passeios de stand-up e tranquilidade à beira-d'água.",
    distance: "18 km do centro",
    duration: "Dia inteiro",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3qESsSBzL5_mBQMF0e-XOi7B1-XVOPY_Tm_-4NKa-DPmK1zxAtZmJi0-yO0sgtqTSEbnRjaju2IyrbV3oxV19UW9ljiiLsPjPjS7_dk8Rz6fCJ3S8S9ddI36mphz9wyKRe94jz6H8K2dSECZlmJApQjJS_NxsmjkYirCsxN5rtq-hHrfBTuGGrdRipoxRT0TGDQhaMND5oI-XfAiFodc0Tls4lE1uTuqlTVDPTT2orE02flf4c44u",
    imageAlt: "Vista panorâmica da Lagoa do Uruaú cercada de dunas e coqueiros",
    category: "praias",
  },
];

export const INITIAL_COMMERCES: Commerce[] = [
  {
    id: "carlinhos-barraca",
    name: "Barraca do Carlinhos",
    category: "Barraca de Praia",
    categorySlug: "barracas",
    district: "Praia de Morro Branco",
    districtSlug: "morro-branco",
    description: "Peixada Cearense tradicional & Caranguejada fresca ao leite de coco.",
    locationDetails: "Beira-mar de Morro Branco, em frente ao monumento",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVhdQmOeBLXzWtXqBjjRtZZ_T_fyjjqh_Ea2F37POxjvlD69ZVRhxo4cqduPPzWeDjx52S04i3nsPVAMJd1G9vrZEB6Nb7IzJ6YYMj6w6XVypQjqA-bZytd9Z3f9C4F0aPnwrnp29_13Y21iNaplImID23ux6eoofmfih5XI1ox8wSjM0l3vLlNJYwMpAn6nleZaZdbbopHHmALH1ODA-T-LZ2OdbF6YNkiXrIJTRFjJbamWfUxfoY",
    whatsapp: "5585999999999",
    phone: "(85) 99999-9999",
    rating: 4.8,
    reviewsCount: 215,
    verified: true,
    actionText: "WhatsApp",
    actionIcon: "chat",
  },
  {
    id: "buggy-tour-falesias",
    name: "Buggy Tour Falésias",
    category: "Bugueiro Credenciado",
    categorySlug: "buggy",
    district: "Ponto Central / Saída Rápida",
    districtSlug: "morro-branco",
    description: "Associação Oficial de Bugueiros de Beberibe • Seguro passageiro incluso.",
    locationDetails: "Morro Branco e Praia das Fontes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLKi4m80ob-9WIcUZBht9Qyzw58mqUpz3tWIPU-xaFqQ0pDZ6vwixJx_GG97XjxDLUobQlawdssPolmxO1iFksenPAhTNjAZEEGHxBw-kCleD-oqEQ5cmZK1wAnaov7Ea0pGj-yx3PLkEYUQpu012BfxwwwFTZ5hUuEs4xs6N47JUcMiYwlrdLKajSIdWPZFvs-BhMW4rc_9BXO4emJtssCT27s44Cm_qH8gl8pJaXod4BfCfiWBty",
    whatsapp: "5585988888888",
    phone: "(85) 98888-8888",
    rating: 5.0,
    reviewsCount: 340,
    verified: true,
    actionText: "Reservar",
    actionIcon: "calendar_today",
  },
  {
    id: "pousada-flamboyant",
    name: "Pousada Flamboyant",
    category: "Pousada & Café",
    categorySlug: "pousadas",
    district: "Praia das Fontes",
    districtSlug: "praia-das-fontes",
    description: "Pé na areia com café da manhã artesanal regional, tapiocas e frutas tropicais.",
    locationDetails: "Rua das Fontes, 120",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc7uf7OwWJwCOO2u2kaP98LZFnSSvk6TQHjJw4iQVWsU3FMSPxgB8KdaBWbgiSlVFAahNGi7ecDWa74YundqsN9E9Cg4fEqsw0QaVaLJXHMl5KoUiayYgb0nq82mxsTwVxMbmiNNso_vpeVVP6MhxFeehniasAr5woxE5DgZfO4STxrWPJohtabnum-ilhUB1kYefaZsz8DdY8FBbzlPL-xsLwEAiRbsACtAEyTPhjNKe3XlRMBP0a",
    whatsapp: "5585977777777",
    phone: "(85) 97777-7777",
    rating: 4.9,
    reviewsCount: 128,
    verified: true,
    actionText: "Contatar",
    actionIcon: "call",
  },
  {
    id: "artesanato-morro-branco",
    name: "Associação das Rendeiras e Areias Coloridas",
    category: "Rendas & Artesanato",
    categorySlug: "artesanato",
    district: "Morro Branco",
    districtSlug: "morro-branco",
    description: "Garrafinhas de silhueta de areia colorida autênticas e rendas de bilro finas.",
    locationDetails: "Praça do Artesão, Morro Branco",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa0UjitalrdCuR5OoHur9CNStux_kQc6Hnh6uNOm1Yfu0c_H1iHxl2yj4AMSKPvwQG6dQeQTo2Muy_R5eEKGco6AffMWa5mUcFAoVPZFJje_o6Bzd3F9KGG39QZB1PZa1VccUAS_gGEUNmGQagBIZdVjWKYfGhB9rYrKHb-e1nHl31i-yEuYV-tWCwdX0DVvuO1M51UVPj5pYL2yrDToNqwAxFT56GA5SU_kBxzJtK2B-KiSnjxWCg",
    whatsapp: "5585966666666",
    phone: "(85) 96666-6666",
    rating: 4.9,
    reviewsCount: 89,
    verified: true,
    actionText: "WhatsApp",
    actionIcon: "chat",
  },
];

export const ITINERARIES: Itinerary[] = [
  {
    id: "itinerario-1-dia",
    days: 1,
    title: "1 Dia: O Essencial de Beberibe",
    tagline: "Roteiros otimizados com maré, gastronomia caiçara e pontos para o pôr do sol nas dunas de Beberibe.",
    schedule: [
      {
        period: "08:30 - Manhã",
        title: "Caminhada no Labirinto das Falésias",
        description: "Aproveite a maré baixa para caminhar pelas fendas das falésias de Morro Branco com a iluminação matinal perfeita para fotos.",
        tip: "Leve protetor solar e água. Contrate um guia mirim ou credenciado local para conhecer a história das areias.",
      },
      {
        period: "12:30 - Almoço",
        title: "Gastronomia Caiçara na Beira-Mar",
        description: "Peixe frito com baião de dois, macaxeira e água de coco gelada nas barracas de Morro Branco ou Praia das Fontes.",
        tip: "Experimente a peixada cearense com pirão.",
      },
      {
        period: "14:30 - Tarde",
        title: "Passeio de Buggy até a Gruta da Mãe D'Água",
        description: "Passeio pelas dunas, lagoas temporárias e banho refrescante nas bicas de água doce que brotam das falésias.",
        tip: "Consulte a maré antes de entrar nas grutas marítimas.",
      },
      {
        period: "17:15 - Fim de tarde",
        title: "Pôr do Sol nas Dunas de Morro Branco",
        description: "O sol mergulha suavemente sobre as dunas douradas com vista panorâmica para o Atlântico.",
        tip: "Momento ideal para fotos com tons quentes.",
      },
    ],
  },
  {
    id: "itinerario-2-dias",
    days: 2,
    title: "2 Dias: Mar & Lagoas Paradisíacas",
    tagline: "Explore a fundo as falésias e passe um dia relaxante na Lagoa do Uruaú.",
    schedule: [
      {
        period: "Dia 1 - Integral",
        title: "Circuito Falésias & Praia das Fontes",
        description: "Labirinto mineral, artesanato de areias coloridas no centro de artesanato e bicas naturais.",
        tip: "Pernoite em uma pousada aconchegante na Praia das Fontes.",
      },
      {
        period: "Dia 2 - Manhã e Tarde",
        title: "Dia Completo na Lagoa do Uruaú",
        description: "Maior lagoa do estado com águas calmas e doces. Stand-up paddle, passeios de caiaque e quiosques com redes dentro d'água.",
        tip: "As barracas do Uruaú servem camarões frescos deliciosos.",
      },
    ],
  },
  {
    id: "itinerario-3-dias",
    days: 3,
    title: "3 Dias: Imersão Completa no Litoral Leste",
    tagline: "Da cultura rendeira às praias desertas de Paripueira e Sucatinga.",
    schedule: [
      {
        period: "Dia 1",
        title: "Cultura, Falésias e Artesanato",
        description: "Visita ao Centro Histórico de Beberibe, Igreja Matriz, feira de rendas e labirinto de Morro Branco.",
        tip: "Aprecie o trabalho centenário das rendeiras de bilro.",
      },
      {
        period: "Dia 2",
        title: "Aventura Ecológica e Lagoa do Uruaú",
        description: "Buggy pelas dunas móveis, dunas com esquibunda e tarde relaxante na lagoa.",
        tip: "Leve câmera com bateria extra para os mirantes.",
      },
      {
        period: "Dia 3",
        title: "Praias Selvagens: Paripueira e Barra da Sucatinga",
        description: "Comunidades tradicionais de pescadores, tranquilidade absoluta e gastronomia caseira.",
        tip: "Converse com os jangadeiros locais para entender o ritmo da maré.",
      },
    ],
  },
];

export const LOCAL_EVENTS: LocalEvent[] = [
  {
    id: "evento-1",
    title: "Encontro Cultural das Rendeiras",
    date: "Sábado, 24 de Outubro",
    time: "16:00 às 20:00",
    location: "Praça da Igreja Matriz - Centro de Beberibe",
    category: "Cultura & Artesanato",
    description: "Apresentações ao vivo de rendeiras de bilro, música regional cearense e feira gastronômica.",
  },
  {
    id: "evento-2",
    title: "Regata Tradicional de Jangadas de Morro Branco",
    date: "Domingo, 01 de Novembro",
    time: "09:00",
    location: "Praia de Morro Branco",
    category: "Esporte & Tradição",
    description: "Competição das icônicas velas cearenses com saída na praia e premiação para pescadores artesanais.",
  },
  {
    id: "evento-3",
    title: "Pôr do Sol Acústico na Lagoa do Uruaú",
    date: "Todos os fins de tarde",
    time: "17:00",
    location: "Deck dos Quiosques - Lagoa do Uruaú",
    category: "Música & Lazer",
    description: "Música suave ao vivo à beira da lagoa enquanto o sol se põe nas dunas.",
  },
];
