import axios from 'axios';

import { PostContent } from '../utils/PostContent';

const NOTION_API = process.env.NOTION_API;
const NOTION_PAGE_SLUG = process.env.NOTION_PAGE_SLUG;

export const getNotionPosts = async (): Promise<PostContent[]> => {
    return await axios.get(`https://${NOTION_API}/v1/table/${NOTION_PAGE_SLUG}`).then((response) => response.data);
};
