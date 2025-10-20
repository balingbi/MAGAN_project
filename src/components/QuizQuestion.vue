<template>
  <div class="mb-4">
    <h4 class="font-semibold mb-2">{{ question.text }}</h4>
    <div v-for="option in question.options" :key="option" class="mb-1">
      <label class="flex items-center space-x-2">
        <input type="radio" :name="question.id" :value="option" @change="select(option)">
        <span>{{ option }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
const props = defineProps({ question: Object })
const emit = defineEmits(['answer'])

const select = (option) => {
  emit('answer', option)
}
</script>