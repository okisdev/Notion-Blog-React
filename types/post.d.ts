export interface PostAuthor {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profilePhoto: string;
}

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
