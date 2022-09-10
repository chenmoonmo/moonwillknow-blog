import { getPostDetail, getPostsList } from 'api';
import { GetServerSideProps, NextPage } from 'next';
import { Feed } from 'feed';
import ReactDOMServer from 'react-dom/server';

import { NotionRenderer } from 'react-notion-x';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';

const FeedPage: NextPage = () => null;

const mapPageUrl = (id: any) => 'https://www.notion.so/' + id.replace(/-/g, '');

const createFeedContent = async (id: string) => {
  const { data: detail } = await getPostDetail(id);
  const content = ReactDOMServer.renderToString(
    <NotionRenderer recordMap={detail as any}
    components={{
        Equation,
        Code,
        Collection
    }}
     mapPageUrl={mapPageUrl} />
  );
  const regexExp =
    /<div class="notion-collection-row"><div class="notion-collection-row-body"><div class="notion-collection-row-property"><div class="notion-collection-column-title"><svg.*?class="notion-collection-column-title-icon">.*?<\/svg><div class="notion-collection-column-title-body">.*?<\/div><\/div><div class="notion-collection-row-value">.*?<\/div><\/div><\/div><\/div>/g;
  return content.replace(regexExp, '');
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const year = new Date().getFullYear();
  res.setHeader('Content-Type', 'text/xml');
  const { data: posts } = await getPostsList();
  const latestPosts = posts.slice(0, 10);
  const xmlFeed = new Feed({
    title: 'Moon will know blog',
    description: 'Moon will know and moon always knows.',
    id: `https://moonwillknow.dev`,
    link: `https://moonwillknow.dev`,
    language: 'zh',
    favicon: `https://moonwillknow.dev/favicon.ico`,
    copyright: `All rights reserved ${year}`,
    author: {
      name: 'chenmoonmo',
      email: 'chenmoonmo@gmail.com',
      link: `https://moonwillknow.dev`,
    },
  });

  for (const post of latestPosts) {
    xmlFeed.addItem({
      title: post.title,
      id: post.id,
      image: post.cover,
      link: `https://moonwillknow.dev/posts/${post.id}`,
      description: post.summary,
      content: await createFeedContent(post.id),
      date: new Date(post?.date?.start_date || post.createdTime),
    });
  }

  res.write(xmlFeed.atom1());
  res.end();
  return {
    props: {},
  };
};

export default Feed;
