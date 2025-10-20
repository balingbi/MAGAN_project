<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block mb-2">Full Name</label>
          <input v-model="name" type="text" placeholder="Enter full name" class="w-full px-3 py-2 border rounded"/>
        </div>
        <div class="mb-4">
          <label class="block mb-2">Email</label>
          <input v-model="email" type="email" placeholder="Enter email" class="w-full px-3 py-2 border rounded"/>
        </div>
        <div class="mb-4">
          <label class="block mb-2">Password</label>
          <input v-model="password" type="password" placeholder="Enter password" class="w-full px-3 py-2 border rounded"/>
        </div>
        <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500">Register</button>
      </form>

      <div v-if="submitted" class="mt-6 bg-green-100 p-4 rounded text-green-700">
        <p>Registered with Name: {{ name }}, Email: {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Register',
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const submitted = ref(false)

    const handleRegister = () => {
      if (!name.value || !email.value || !password.value) {
        alert('All fields are required!')
        return
      }
      submitted.value = true
    }

    return { name, email, password, submitted, handleRegister }
  }
}
</script>
