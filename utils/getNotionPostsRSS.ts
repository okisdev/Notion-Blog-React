import { Feed } from 'feed';

import { PostContent } from './PostContent';

import getNotionPostSlug from '../utils/getNotionPostSlug';

import siteConfig from '../config/site.config';

const domain = siteConfig.global.site.url;
const author = siteConfig.global.author;

const getNotionPostsRSS = (posts: PostContent[]) => {
    const currentYear = new Date().getFullYear();
    const atom = new Feed({
        title: `${author}'s Blog`,
        link: domain,
        id: domain,
        copyright: `Copyright © ${currentYear} ${author}. All rights reserved.`,
        author: {
            name: `${author}`,
        },
    });

    posts.forEach((post) => {
        if (post.published) {
            atom.addItem({
                title: post.title,
                link: `${domain}${getNotionPostSlug(post.slug)}`,
                id: `${domain}${getNotionPostSlug(post.slug)}`,
                description: post.description,
                date: new Date(post.date),
            });
        }
    });

    return atom.rss2();
};

export default getNotionPostsRSS;
