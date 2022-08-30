import { request } from 'utils';

// TODO: 返回类型问题
type GetPostsList = (data?: { lastId?: string; pageSize: number }) => Promise<{
  data: any[];
}>;

type GetPostDetail = (id: string) => Promise<{
  data: any;
}>;

export const getPostsList: GetPostsList = (data) =>
  request.get('/notion/posts', {
    data,
  });

export const getPostDetail: GetPostDetail = (id) => request.get(`/notion/posts/${id}`);
