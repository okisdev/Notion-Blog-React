import { GetServerSideProps } from 'next';
import { FC } from 'react';

import { getNotionPosts } from '../utils/getNotionPosts';
import getNotionPostsRSS from '../utils/getNotionPostsRSS';

const Atom: FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    if (res) {
        const posts = await getNotionPosts();
        const xml = getNotionPostsRSS(posts);

        res.setHeader('Content-Type', 'text/xml');
        res.write(xml);
        res.end();
    }

    return {
        props: {},
    };
};

export default Atom;
