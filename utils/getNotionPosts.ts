import axios from 'axios';

import { PostContent } from '@/types/post';

const NOTION_API = process.env.NOTION_API;
const NOTION_TABLE_SLUG = process.env.NOTION_TABLE_SLUG;

export const getNotionPosts = async (): Promise<PostContent[]> => {
    return await axios.get(`https://${NOTION_API}/v1/table/${NOTION_TABLE_SLUG}`).then((response: any) => response.data);
};
