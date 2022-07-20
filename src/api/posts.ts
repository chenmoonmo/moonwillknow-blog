import { request } from "utils";

// TODO: 返回类型问题
type GetPostsList = (parmas?: {
  lastId?: string;
  pageSize: number;
}) => Promise<{
  data: any[];
}>;

export const getPostsList: GetPostsList = (parmas) =>
  request.get("/notion/posts", {
    data: parmas,
  });
