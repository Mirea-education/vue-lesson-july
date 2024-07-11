import type { AxiosResponse } from 'axios'
import { api } from '@/api/instance'

export const getPosts = async (): Promise<AxiosResponse<Post[]>> => {
  return await api.get('/posts', {
    params: {
      _limit: 10,
    },
  })
}

export const addPost = async (post: Post): Promise<AxiosResponse<Post>> => {
  return await api.post('/posts', post)
}
