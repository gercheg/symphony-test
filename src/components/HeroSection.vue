<template>
  <section class="hero-section" aria-labelledby="hero-title">
    <div class="hero-content">
      <h1 id="hero-title" class="hero-title">
        <span class="hero-title-static">Write without second-guessing.</span>
        <span class="hero-title-rotating" aria-live="polite">
          <Transition name="rotate-word" mode="out-in">
            <span :key="activeWord" class="rotating-word">{{ activeWord }}?</span>
          </Transition>
        </span>
      </h1>

      <div class="hero-actions">
        <button type="button" class="hero-cta">Try AskGPT</button>
        <p class="hero-counter">10,811 new users</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const words = [
  "Detect AI",
  "Sound human",
  "Prove it's yours",
  "Fix grammar",
  "Go global",
];

const activeIndex = ref(0);
const activeWord = computed(() => words[activeIndex.value]);

let intervalId;

onMounted(() => {
  intervalId = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % words.length;
  }, 2500);
});

onBeforeUnmount(() => {
  if (intervalId) {
    window.clearInterval(intervalId);
  }
});
</script>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  padding: 4rem 1.5rem;
}

.hero-content {
  width: min(100%, 56rem);
  text-align: center;
}

.hero-title {
  margin: 0;
  display: grid;
  gap: 0.5rem;
  line-height: 1.15;
}

.hero-title-static {
  display: block;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
}

.hero-title-rotating {
  display: block;
  min-height: 1.2em;
  overflow: hidden;
  font-size: clamp(1.75rem, 4.5vw, 3rem);
  font-weight: 700;
}

.rotating-word {
  display: inline-block;
}

.hero-actions {
  margin-top: 2rem;
  display: grid;
  justify-items: center;
  gap: 0.75rem;
}

.hero-cta {
  border: 0;
  border-radius: 999px;
  padding: 0.85rem 1.5rem;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.hero-counter {
  margin: 0;
  font-size: 0.95rem;
}

.rotate-word-enter-active,
.rotate-word-leave-active {
  transition: opacity 320ms ease, transform 320ms ease;
}

.rotate-word-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.rotate-word-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@media (prefers-reduced-motion: reduce) {
  .rotate-word-enter-active,
  .rotate-word-leave-active {
    transition: none;
  }
}
</style>
