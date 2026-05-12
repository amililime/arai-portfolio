export interface Project {
  id: string;
  title: string;
  cover: string;
  category: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'hello-fresh',
    title: 'Hello Fresh',
    cover: '/images/AraiMoleri_HelloFresh_1.jpg',
    category: 'commercial',
    images: [
      '/images/AraiMoleri_HelloFresh_1.jpg',
      '/images/AraiMoleri_HelloFresh_2.jpg',
      '/images/AraiMoleri_HelloFresh_3.jpg',
      '/images/AraiMoleri_HelloFresh_4.jpg',
      '/images/AraiMoleri_HelloFresh_5.jpg',
      '/images/AraiMoleri_HelloFresh_6.jpg',
      '/images/AraiMoleri_HelloFresh_7.jpg',
      '/images/AraiMoleri_HelloFresh_8.jpg',
    ],
  },
  {
    id: 'sinfonia',
    title: 'Sinfonía',
    cover: '/images/AraiMoleri_Sinfonia_1.jpg',
    category: 'commercial',
    images: [
      '/images/AraiMoleri_Sinfonia_1.jpg',
      '/images/AraiMoleri_Sinfonia_2.jpg',
      '/images/AraiMoleri_Sinfonia_3.jpg',
      '/images/AraiMoleri_Sinfonia_4.jpg',
      '/images/AraiMoleri_Sinfonia_5.jpg',
    ],
  },
  {
    id: 'via-aqua',
    title: 'Via Aqua',
    cover: '/images/AraiMoleri_ViaAqua_1.jpg',
    category: 'commercial',
    images: [
      '/images/AraiMoleri_ViaAqua_1.jpg',
    ],
  },
];
