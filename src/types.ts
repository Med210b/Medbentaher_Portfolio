import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: ReactNode;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}
