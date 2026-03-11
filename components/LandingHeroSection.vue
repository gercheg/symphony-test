<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'

const rotatingEl = ref<HTMLElement | null>(null)
const phrases = ['Detect AI', 'Flag plagiarism', 'Verify originality', 'Protect your voice', 'Publish confidently']
let phraseIndex = 0
let intervalId: ReturnType<typeof setInterval> | null = null
let tween: gsap.core.Tween | null = null

const tabs = [
  { label: 'Academic', icon: 'i-heroicons-academic-cap' },
  { label: 'SEO', icon: 'i-heroicons-magnifying-glass' },
  { label: 'Social', icon: 'i-heroicons-chat-bubble-oval-left-ellipsis' },
  { label: 'Email', icon: 'i-heroicons-envelope' },
  { label: 'Reports', icon: 'i-heroicons-chart-bar-square' }
]

const animatePhrase = () => {
  if (!rotatingEl.value) {
    return
  }

  tween?.kill()
  tween = gsap.timeline()
    .to(rotatingEl.value, {
      opacity: 0,
      y: -8,
      duration: 0.3,
      ease: 'power2.in'
    })
    .add(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length
      if (rotatingEl.value) {
        rotatingEl.value.textContent = phrases[phraseIndex]
      }
    })
    .fromTo(
      rotatingEl.value,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
    )
}

onMounted(async () => {
  await nextTick()
  if (rotatingEl.value) {
    rotatingEl.value.textContent = phrases[0]
  }
  intervalId = setInterval(animatePhrase, 2500)
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  tween?.kill()
})
</script>

<template>
  <section class="hero">
    <div class="hero__badge">Over 10 811 new users joined today</div>

    <h1 class="hero__title">
      Write without second-guessing.
      <span ref="rotatingEl" class="hero__rotating">Detect AI</span>
    </h1>

    <p class="hero__subtitle">Use AI. Keep the credit.</p>

    <div class="hero__tabs-wrap">
      <div class="hero__tabs" role="tablist" aria-label="Hero tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.label"
          class="hero__tab"
          :class="{ 'hero__tab--active': index === 0 }"
          role="tab"
          :aria-selected="index === 0"
          type="button"
        >
          <UIcon :name="tab.icon" class="hero__icon" aria-hidden="true" />
          <span>{{ tab.label }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 56px 16px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__badge {
  background: #f3f4f6;
  border-radius: 9999px;
  padding: 10px 18px;
  color: #030712;
  font-family: 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
}

.hero__title {
  margin-top: 28px;
  margin-bottom: 0;
  color: #030712;
  text-align: center;
  font-family: 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.08;
  max-width: 980px;
}

.hero__rotating {
  display: block;
  min-height: 1.08em;
}

.hero__subtitle {
  margin-top: 18px;
  margin-bottom: 0;
  color: #030712;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
}

.hero__tabs-wrap {
  width: 100%;
  margin-top: 36px;
  overflow-x: auto;
}

.hero__tabs {
  width: 960px;
  min-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  border-bottom: 1px solid #e5e7eb;
}

.hero__tab {
  appearance: none;
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #6b7280;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 8px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.hero__tab--active {
  color: #030712;
  border-bottom-color: #000000;
}

.hero__icon {
  width: 18px;
  height: 18px;
  color: currentColor;
}

@media (max-width: 768px) {
  .hero__subtitle {
    display: none;
  }
}
</style>