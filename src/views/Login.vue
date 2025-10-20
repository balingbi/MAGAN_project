<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block mb-2">Email</label>
          <input v-model="email" type="email" placeholder="Enter your email" class="w-full px-3 py-2 border rounded"/>
        </div>
        <div class="mb-4">
          <label class="block mb-2">Password</label>
          <input v-model="password" type="password" placeholder="Enter your password" class="w-full px-3 py-2 border rounded"/>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Login</button>
      </form>

      <div v-if="submitted" class="mt-6 bg-green-100 p-4 rounded text-green-700">
        <p>Logged in with Email: {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Login',
  setup() {
    const email = ref('')
    const password = ref('')
    const submitted = ref(false)

    const handleLogin = () => {
      if (!email.value || !password.value) {
        alert('Please enter both email and password')
        return
      }
      submitted.value = true
    }

    return { email, password, submitted, handleLogin }
  }
}
</script>
