<script setup lang="ts">
import { useLandingSeo } from '~/composables/useLandingSeo'

useLandingSeo()
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950">
    <LandingHeaderSection />

    <main>
      <LandingHeroSection />
      <LandingDetectionDemo />
      <LandingToolsSection />
      <LandingFeatureShowcase />
      <LandingUseCasesSection />
      <LandingFaqSection />
    </main>

    <LandingFooterSection />
  </div>
</template>
