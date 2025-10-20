import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAssessmentStore = defineStore('assessment', () => {
  const answers = reactive([])

  const setAnswers = (newAnswers) => {
    answers.splice(0, answers.length, ...newAnswers)
  }

  return { answers, setAnswers }
})
