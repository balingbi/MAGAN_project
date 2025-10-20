<template>
  <div>
    <!-- Hero / Welcome Section -->
    <section class="text-center p-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 class="text-5xl font-bold mb-4">Welcome to the Career Guidance System</h1>
      <p class="text-lg max-w-3xl mx-auto">
        Empowering students to discover their ideal career paths through personalized assessments,
        insights, and guidance. Take the first step toward your future with confidence and clarity.
      </p>
    </section>

    <!-- Information Cards -->
    <section class="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
        <h2 class="text-xl font-bold text-blue-700 mb-2">Career Assessment</h2>
        <p class="text-gray-600">
          Evaluate your interests, strengths, and preferences to identify careers that suit your personality.
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
        <h2 class="text-xl font-bold text-blue-700 mb-2">Career List</h2>
        <p class="text-gray-600">
          Explore detailed information about various professions to help you make informed choices.
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
        <h2 class="text-xl font-bold text-blue-700 mb-2">Student Dashboard</h2>
        <p class="text-gray-600">
          Access your personalized results, insights, and recommendations all in one place.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
