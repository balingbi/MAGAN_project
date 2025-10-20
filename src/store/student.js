import { defineStore } from 'pinia'

export const useStudentStore = defineStore('student', {
  state: () => ({
    name: '',
    email: '',
    quizAnswers: [],
    recommendedCareers: []
  }),
  actions: {
    setStudent(name, email) {
      this.name = name
      this.email = email
    },
    saveAnswer(questionId, answer) {
      this.quizAnswers.push({ questionId, answer })
    },
    setRecommendations(careers) {
      this.recommendedCareers = careers
    }
  }
})