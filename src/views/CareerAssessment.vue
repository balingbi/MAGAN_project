<template>
  <div class="p-8 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">Career Assessment</h1>
    <form @submit.prevent="submitAssessment">
      <div v-for="(q, index) in questions" :key="index" class="mb-4">
        <label class="block mb-2 font-medium">{{ q.question }}</label>
        <select v-model="answers[index]" class="w-full px-3 py-2 border rounded">
          <option disabled value="">Select your answer</option>
          <option v-for="opt in q.options" :key="opt" :value="opt">{{ opt }}</option>
        </select>
      </div>
      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAssessmentStore } from '../store/assessment'

export default {
  name: 'CareerAssessment',
  setup() {
    const router = useRouter()
    const store = useAssessmentStore()

    const questions = [
      { question: 'I enjoy problem-solving.', options: ['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'] },
      { question: 'I like creative work.', options: ['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'] },
      { question: 'I prefer working in a team.', options: ['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'] }
    ]

    const answers = reactive(Array(questions.length).fill(''))

    const submitAssessment = () => {
      store.setAnswers(answers)  // save answers to store
      router.push('/results')    // navigate to results page
    }

    return { questions, answers, submitAssessment }
  }
}
</script>
