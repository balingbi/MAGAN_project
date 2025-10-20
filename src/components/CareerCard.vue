<template>
  <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
    <h3 class="text-lg font-bold mb-2">{{ career.title }}</h3>
    <p>{{ career.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  career: Object
})
</script>