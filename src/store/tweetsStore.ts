import { defineStore } from 'pinia'

export const useTweetsStore = defineStore({
  id: 'tweets',
  state: () => ({
    tweets: [] as string[]
  }),
  actions: {
    addTweet(tweet: string) {
      this.tweets.push(tweet)
    }
  }
})