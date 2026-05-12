export interface Project {
  id: string;
  title: string;
  src: string;
  category: 'commercial' | 'personal-work' | 'retouching';
}

export const PROJECTS: Project[] = [
  { 
    id: 'hf-1', 
    title: 'Hello Fresh', 
    src: '/images/AraiMoleri_HelloFresh_1.jpg', 
    category: 'commercial' 
  },
  { 
    id: 'hf-2', 
    title: 'Hello Fresh', 
    src: '/images/AraiMoleri_HelloFresh_2.jpg', 
    category: 'commercial' 
  },
  { 
    id: 'hf-3', 
    title: 'Hello Fresh', 
    src: '/images/AraiMoleri_HelloFresh_3.jpg', 
    category: 'commercial' 
  },
  { 
    id: 'hf-4', 
    title: 'Hello Fresh', 
    src: '/images/AraiMoleri_HelloFresh_4.jpg', 
    category: 'commercial' 
  },
  { 
    id: 'hf-5', 
    title: 'Hello Fresh', 
    src: '/images/AraiMoleri_HelloFresh_5.jpg', 
    category: 'commercial' 
  },
  { 
    id: 'hf-6', 
    title: 'Hello Fresh', 
    src: '/images/AraiMoleri_HelloFresh_6.jpg', 
    category: 'commercial' 
  },
  { 
    id: 'hf-7', 
    title: 'Hello Fresh', 
    src: '/images/AraiMoleri_HelloFresh_7.jpg', 
    category: 'commercial' 
  },
  { 
    id: 'hf-8', 
    title: 'Hello Fresh', 
    src: '/images/AraiMoleri_HelloFresh_8.jpg', 
    category: 'commercial' 
  }
];