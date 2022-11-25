import { defaultMapImageUrl } from 'react-notion-x';
import { request } from 'utils';

// TODO: 返回类型问题
type GetPostsList = (data?: { lastId?: string; pageSize: number }) => Promise<{
  data: any[];
}>;

type GetPostDetail = (id: string) => Promise<{
  data: any;
}>;

export const getPostsList: GetPostsList = async () => {
  const { data } = await request.get('/notion/posts');
  return {
    data: data.map((item: any) => {
      item.cover = item?.cover ? defaultMapImageUrl(item?.cover, item) : '';
      return item;
    }),
  };
};

export const getPostDetail: GetPostDetail = async (id) => {
  const { data } = await request.get(`/notion/posts/${id}`);
  data.cover = data?.cover ? (defaultMapImageUrl(data?.cover, data as any) as string) : '';

  return data;
};
