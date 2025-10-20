<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block mb-2 font-medium">Name</label>
          <input v-model="form.name" type="text" placeholder="Your name" class="w-full px-3 py-2 border rounded"/>
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-medium">Email</label>
          <input v-model="form.email" type="email" placeholder="Your email" class="w-full px-3 py-2 border rounded"/>
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-medium">Message</label>
          <textarea v-model="form.message" placeholder="Your message" rows="4" class="w-full px-3 py-2 border rounded"></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Send Message</button>
      </form>

      <div v-if="submitted" class="mt-6 bg-green-100 p-4 rounded text-green-700">
        <h2 class="font-bold">Form Submitted!</h2>
        <p><strong>Name:</strong> {{ form.name }}</p>
        <p><strong>Email:</strong> {{ form.email }}</p>
        <p><strong>Message:</strong> {{ form.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const form = reactive({ name: '', email: '', message: '' })
    const submitted = ref(false)

    const submitForm = () => {
      submitted.value = true
      // Here you can later send the form data to an API or server
    }

    return { form, submitted, submitForm }
  }
}
</script>
