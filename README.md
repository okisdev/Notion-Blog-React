# Notion Blog with React

> A fast serverless Blog powered by Notion.

A Blog powered by [Notion](https://notion.so), built with [React](https://reactjs.org), [Next.js](https://nextjs.org), [tailwindcss](https://tailwindcss.com), [TypeScript](https://www.typescriptlang.org/), [Notion-Api-Worker](https://github.com/splitbee/notion-api-worker), [React-Notion-X](https://github.com/NotionX/react-notion-x/) and more.

## Features

Please see the **[features section](https://github.com/NotionX/react-notion-x#features)** on React-Notion-X by [NotionX](https://github.com/NotionX/).

And also, you can...

-   Easily change the things you want by editing [`.env`](./.env.example) file.
-   Support [Google Analytics](https://analytics.google.com/) & [Splitbee Analytics](https://splitbee.io/).
-   Self host notion-api by using [Cloudflare Workers](https://workers.dev). (Default [notion-api](https://notion-api.splitbee.io) By Splitbee)
-   Use your favorite Google Fonts.
-   Use your own domain.

## Performance

![Notion-Blog-React-Lighthouse-Performance-Desktop](https://cdn.harrly.com/project/GitHub/Notion-Blog-React/img/Lighthouse-Performance-Desktop.png)

-   Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for testing

## Known Issues

-   ❌ Some Notion blocks is not supported. (Please see [here](https://github.com/NotionX/react-notion-x#supported-blocks) for more info.)

## How to deploy

### Preparation

-   **Notion API**: See [here](https://github.com/splitbee/notion-api-worker) for how to deploy a notion-api by yourself. (You can use `notion-api.splitbee.io` instead)
-   **Public Notion Table**: Create a notion table with below properties. (You can duplicate a template [here](https://harrly.notion.site/2f01c9cec94d4925b2e9aec68b0e850b). Please make sure you have content inside a property box)
    -   title: Title
    -   tag: Multi-select
    -   published: Checkbox
    -   date: Date
    -   slug: Text
    -   author: Person
    -   description: Text
-   Change your site config: via [config/site.config.js](/config/site.config.js)

### Deploy locally

1. Git Clone to local
2. Copy `.env.example` file to `.env.local`
3. Add your `NOTION_API` and `NOTION_TABLE_SLUG` (for instance, `2f01c9cec94d4925b2e9aec68b0e850b`) to `.env.local` file
4. run `yarn` to initialize the project
5. run `yarn build && yarn start` to start the project

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FHarry-Yep%2FNotion-Blog-React)

1. Click the button above or visit [here](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FHarry-Yep%2FNotion-Blog-React)
2. Add `NOTION_API` and `NOTION_TABLE_SLUG` to Environment Variables
3. Deploy

## Improvement / Plans

-   [x] Add [React-Notion-X](https://github.com/NotionX/react-notion-x) supported or Mix current api with [React-Notion-X](https://github.com/NotionX/react-notion-x).
-   [ ] Add PostView.
-   [x] Using [Notion Official API](https://developers.notion.com/). (Blogging entirely using Notion's official API is finished and hope to release it soon in the future)
-   [ ] Add Tag.

## Related (Examples or Technology being used)

-   [Splitee Blog](https://splitbee.io/blog) (using React-Notion, contributor of React-Notion)
-   [timo.sh](https://timo.sh/) (using React-Notion, contributor of React-Notion)
-   [TransitiveBullsh.it](https://transitivebullsh.it/) (using React-Notion-X, contributor of React-Notion-X)
-   [Spencerwoo's Blog](https://blog.spencerwoo.com/) (using React-Notion-X)
-   [Vercel](https://vercel.com)
-   [Cloudflare Workers](https://workers.dev)
-   [React](https://reactjs.org)
-   [Next.js](https://nextjs.org)
-   [tailwindcss](https://tailwindcss.com)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Notion-Api-Worker](https://github.com/splitbee/notion-api-worker)
-   [React-Notion-X](https://github.com/NotionX/react-notion-x)
-   [Google Analytics](https://analytics.google.com/)
-   [Splitee](https://splitbee.io/)

## Alternatives

> Turn Notion to Blog/Page

-   [React-Notion](https://github.com/splitbee/react-notion)
-   [React-Notion-X](https://github.com/NotionX/react-notion-x)
-   [Super.so](https://super.so/)
-   [Fruition](https://fruitionsite.com/)

## Credits

Copyright (c) 2022 Harry Yep

-   All Authors & Contributors who own its repository
