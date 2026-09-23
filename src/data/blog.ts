import { article1 } from "./articles/article1";
import { article2 } from "./articles/article2";
import { article3 } from "./articles/article3";
import { article4 } from "./articles/article4";
import { article5 } from "./articles/article5";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description?: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  image: string;
  coverImage?: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  article1,
  article2,
  article3,
  article4,
  article5,
];
