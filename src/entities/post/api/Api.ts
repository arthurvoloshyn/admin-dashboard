import { client } from '../../../shared/api';
import { type Post } from '../model/Post';

export const getPosts = async (page: number, size: number) => {
  const response = await client.get(
    `/api/admin/v1/posts?page=${page}&size=${size}`,
  );

  return response.data;
};

export const getPost = async (id: string) => {
  const { data } = await client.get(`/api/admin/v1/post/${id}`);

  return data.data;
};

export const updatePost = (post: Post) => {
  return client.put('/api/admin/v1/post', post);
};

export const createPost = (post: Post) => {
  return client.post('/api/admin/v1/post', post);
};

export const deletePost = (id: string) => {
  return client.delete(`/api/admin/v1/post/${id}`);
};
