import { PostAuthor } from './PostAuthor';

export interface PostContent {
    id: string;
    title: string;
    description: string;
    date: string;
    slug: string;
    tag: string[];
    published: boolean;
    author: PostAuthor[];
}
