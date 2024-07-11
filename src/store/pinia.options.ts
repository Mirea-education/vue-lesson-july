import { defineStore } from 'pinia'
import { addPost, getPosts } from '@/api'

// пример использования на Options API

export const useCardStore = defineStore('cards-options', {
  // тут так же просто можно типизировать сам state
  state: () => {
    return {
      posts: [] as Post[],
    }
  },
  actions: {
    async getAllPosts() {
      try {
        const response = await getPosts()
        this.posts = response.data
      }
      catch (err) {
        console.error(err)
      }
    },
    async createNewPost(post: Post) {
      try {
        const { data } = await addPost(post)
        this.posts.push(data)
      }
      catch (err) {
        console.error(err)
      }
    },
  },
})
