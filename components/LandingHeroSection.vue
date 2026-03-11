<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'

const rotatingEl = ref<HTMLElement | null>(null)
const phrases = ['Detect AI', 'Sound human', "Prove it's yours", 'Fix grammar', 'Go global']
let phraseIndex = 0
let intervalId: ReturnType<typeof setInterval> | null = null
let tween: gsap.core.Tween | null = null

const tabs = ['Detect AI', 'Humanize Text', 'Check Plagiarism', 'Grammar', 'Translate']

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
    <div class="hero__badge">
      <span class="hero__avatar-strip" aria-hidden="true">
        <img src="https://i.pravatar.cc/42?img=12" alt="" class="hero__avatar" loading="lazy" decoding="async">
        <img src="https://i.pravatar.cc/42?img=24" alt="" class="hero__avatar" loading="lazy" decoding="async">
        <img src="https://i.pravatar.cc/42?img=36" alt="" class="hero__avatar" loading="lazy" decoding="async">
      </span>
      <span>Over 10 811 new users joined today</span>
    </div>

    <h1 class="hero__title">
      Write without second-guessing.
      <span ref="rotatingEl" class="hero__rotating">Detect AI</span>
    </h1>

    <p class="hero__subtitle">Use AI. Keep the credit.</p>

    <div class="hero__tabs-wrap">
      <div class="hero__tabs" role="tablist" aria-label="Hero tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="tab"
          class="hero__tab"
          :class="{ 'hero__tab--active': index === 0 }"
          role="tab"
          :aria-selected="index === 0"
          type="button"
        >
          <span class="hero__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="hero__scan-icon">
              <path
                d="M4 7V5h2V3h2v4H4Zm12-4h2v2h2v2h-4V3ZM4 17h4v4H6v-2H4v-2Zm16 0v2h-2v2h-2v-4h4ZM8 8h8v8H8V8Zm2 2v4h4v-4h-4Z"
                fill="currentColor"
              />
            </svg>
            <svg viewBox="0 0 24 24" class="hero__sparkle-icon">
              <path
                d="m12 2 1.7 4.3L18 8l-4.3 1.7L12 14l-1.7-4.3L6 8l4.3-1.7L12 2Zm7 10 1 2.5L22.5 15 20 16l-1 2.5L18 16l-2.5-1 2.5-1 1-2.5ZM5 14l1.2 3.1L9.3 18l-3.1 1.2L5 22l-1.2-2.8L.7 18l3.1-.9L5 14Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span>{{ tab }}</span>
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
  padding: 6px 12px;
  color: #030712;
  font-family: 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.hero__avatar-strip {
  width: 132px;
  height: 42px;
  border-radius: 9999px;
  overflow: hidden;
  display: inline-flex;
  flex: 0 0 auto;
}

.hero__avatar {
  width: 42px;
  height: 42px;
  object-fit: cover;
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
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  flex: 0 0 auto;
}

.hero__scan-icon,
.hero__sparkle-icon {
  width: 12px;
  height: 12px;
  color: currentColor;
}

@media (max-width: 768px) {
  .hero__subtitle {
    display: none;
  }
}
</style>
