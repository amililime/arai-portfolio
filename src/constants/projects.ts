export interface ProjectImage {
  src: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  cover: string;
  images: ProjectImage[];
  category: 'commercial' | 'personal-work' | 'retouching';
  slug: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'hellofresh',
    title: 'Hello Fresh',
    cover: '/images/AraiMoleri_HelloFresh_1.jpg',
    images: [
      { src: '/images/AraiMoleri_HelloFresh_1.jpg' },
      { src: '/images/AraiMoleri_HelloFresh_2.jpg' },
      { src: '/images/AraiMoleri_HelloFresh_3.jpg' },
      { src: '/images/AraiMoleri_HelloFresh_4.jpg' },
      { src: '/images/AraiMoleri_HelloFresh_5.jpg' },
      { src: '/images/AraiMoleri_HelloFresh_6.jpg' },
      { src: '/images/AraiMoleri_HelloFresh_7.jpg' },
      { src: '/images/AraiMoleri_HelloFresh_8.jpg' },
    ],
    category: 'commercial',
    slug: 'hellofresh',
  },
  {
    id: 'sinfonia',
    title: 'Sinfonía',
    cover: '/images/AraiMoleri_Sinfonia_1.jpg',
    images: [
      { src: '/images/AraiMoleri_Sinfonia_1.jpg' },
    ],
    category: 'commercial',
    slug: 'sinfonia',
  },
  {
    id: 'viaaqua',
    title: 'Via Aqua',
    cover: '/images/AraiMoleri_ViaAqua_1.jpg',
    images: [
      { src: '/images/AraiMoleri_ViaAqua_1.jpg' },
    ],
    category: 'commercial',
    slug: 'viaaqua',
  },
];
