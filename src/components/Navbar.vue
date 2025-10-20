<template>
  <nav class="bg-blue-600 text-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-2xl font-bold">CareerGuidance</router-link>
        </div>

        <div class="hidden md:flex md:space-x-6 md:items-center">
          <router-link to="/" class="hover:bg-blue-500 px-3 py-2 rounded">Home</router-link>
          <router-link to="/login" class="hover:bg-blue-500 px-3 py-2 rounded">Login</router-link>
          <router-link to="/register" class="hover:bg-blue-500 px-3 py-2 rounded">Register</router-link>
          <router-link to="/dashboard" class="hover:bg-blue-500 px-3 py-2 rounded">Dashboard</router-link>
          <router-link to="/assessment" class="hover:bg-blue-500 px-3 py-2 rounded">Assessment</router-link>
          <router-link to="/results" class="hover:bg-blue-500 px-3 py-2 rounded">Results</router-link>
          <router-link to="/careers" class="hover:bg-blue-500 px-3 py-2 rounded">Careers</router-link>
          <router-link to="/contact" class="hover:bg-blue-500 px-3 py-2 rounded">Contact</router-link>
        </div>

        <div class="flex items-center md:hidden">
          <button @click="open = !open" type="button">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="open" class="md:hidden bg-blue-500">
      <router-link @click="open = false" to="/" class="block px-4 py-2 hover:bg-blue-400">Home</router-link>
      <router-link @click="open = false" to="/login" class="block px-4 py-2 hover:bg-blue-400">Login</router-link>
      <router-link @click="open = false" to="/register" class="block px-4 py-2 hover:bg-blue-400">Register</router-link>
      <router-link @click="open = false" to="/dashboard" class="block px-4 py-2 hover:bg-blue-400">Dashboard</router-link>
      <router-link @click="open = false" to="/assessment" class="block px-4 py-2 hover:bg-blue-400">Assessment</router-link>
      <router-link @click="open = false" to="/results" class="block px-4 py-2 hover:bg-blue-400">Results</router-link>
      <router-link @click="open = false" to="/careers" class="block px-4 py-2 hover:bg-blue-400">Careers</router-link>
      <router-link @click="open = false" to="/contact" class="block px-4 py-2 hover:bg-blue-400">Contact</router-link>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const open = ref(false)
    return { open }
  }
}
</script>
