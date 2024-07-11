import { defineStore } from 'pinia'
import { ref } from 'vue'
import { addPost, getPosts } from '@/api'

// пример использования на Composition API

export const usePostStore = defineStore('posts-composition', () => {
  const posts = ref<Post[]>([])

  const getAllPosts = async () => {
    try {
      const { data } = await getPosts()
      posts.value = data
    }
    catch (err) {
      console.error(err)
    }
  }
  const createNewPost = async (post: Post) => {
    try {
      const { data } = await addPost(post)
      posts.value.push(data)
    }
    catch (err) {
      console.error(err)
    }
  }
  return {
    posts,
    getAllPosts,
    createNewPost,
  }
})
