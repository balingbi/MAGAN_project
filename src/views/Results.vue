<template>
  <div class="p-8 max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Assessment Results</h1>
    <div v-if="answers.length">
      <ul>
        <li v-for="(ans, i) in answers" :key="i">
          <strong>{{ questions[i].question }}</strong> → {{ ans }}
        </li>
      </ul>
    </div>
    <div v-else class="text-gray-500">
      No answers found. Please take the assessment first.
    </div>
  </div>
</template>

<script>
import { useAssessmentStore } from '../store/assessment'

export default {
  name: 'Results',
  setup() {
    const store = useAssessmentStore()

    const questions = [
      { question: 'I enjoy problem-solving.' },
      { question: 'I like creative work.' },
      { question: 'I prefer working in a team.' }
    ]

    return { answers: store.answers, questions }
  }
}
</script>
