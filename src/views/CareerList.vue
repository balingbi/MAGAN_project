<template>
  <div class="p-8 max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Career List</h1>

    <form @submit.prevent="addCareer" class="mb-6 flex gap-2">
      <input v-model="newCareer" type="text" placeholder="Add a new career" class="flex-1 px-3 py-2 border rounded"/>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Add</button>
    </form>

    <ul class="list-disc pl-5">
      <li v-for="(career, index) in careers" :key="index" class="mb-2">
        {{ career }}
        <button @click="removeCareer(index)" class="text-red-500 ml-2">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CareerList',
  setup() {
    const newCareer = ref('')
    const careers = ref(['Software Developer', 'Teacher', 'Engineer'])

    const addCareer = () => {
      if (newCareer.value.trim() !== '') {
        careers.value.push(newCareer.value.trim())
        newCareer.value = ''
      }
    }

    const removeCareer = (index) => {
      careers.value.splice(index, 1)
    }

    return { newCareer, careers, addCareer, removeCareer }
  }
}
</script>
