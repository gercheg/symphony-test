<script setup lang="ts">
import { useLandingSeo } from '~/composables/useLandingSeo'

const tabs = [
  'Professionals',
  'Students',
  'Creators',
  'Marketers',
  'Developers',
]

const activeTab = 'Professionals'

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
      <section class="use-cases-section">
        <div class="use-cases-container">
          <h2 class="use-cases-title">Perfect any project with AskGPT</h2>

          <div class="use-cases-tabs" role="tablist" aria-label="Use case tabs">
            <button
              v-for="tab in tabs"
              :key="tab"
              type="button"
              role="tab"
              :aria-selected="tab === activeTab"
              class="use-cases-tab"
              :class="{ 'use-cases-tab-active': tab === activeTab }"
            >
              {{ tab }}
            </button>
          </div>

          <article class="use-cases-card">
            <div class="use-cases-copy">
              <p class="use-cases-eyebrow">For professionals</p>
              <h3 class="use-cases-heading">Generate polished drafts in minutes</h3>
              <p class="use-cases-description">
                Turn rough ideas into client-ready emails, reports, and briefs with tone-aware writing help.
              </p>
              <button type="button" class="use-cases-cta">Try AskGPT for work</button>
            </div>

            <div class="use-cases-visual" aria-hidden="true">
              <div class="use-cases-visual-card"></div>
              <div class="badge badge-top">Accurate tone</div>
              <div class="badge badge-middle">Faster delivery</div>
              <div class="badge badge-bottom">Ready to share</div>
            </div>
          </article>
        </div>
      </section>
      <LandingPartnerTrustBar />
      <LandingFaqSection />
    </main>

    <LandingFooterSection />
  </div>
</template>

<style scoped>
.use-cases-section {
  background: #eff6ff;
  padding: 80px 24px;
}

.use-cases-container {
  max-width: 1120px;
  margin: 0 auto;
}

.use-cases-title {
  margin: 0;
  color: #0f172a;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
}

.use-cases-tabs {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.use-cases-tab {
  border: 1px solid #bfdbfe;
  border-radius: 999px;
  background: #dbeafe;
  color: #1e3a8a;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}

.use-cases-tab-active {
  background: #1d4ed8;
  border-color: #1d4ed8;
  color: #ffffff;
}

.use-cases-card {
  margin-top: 24px;
  border-radius: 24px;
  border: 1px solid #bfdbfe;
  background: #ffffff;
  padding: 28px;
  display: grid;
  grid-template-columns: 1fr minmax(280px, 470px);
  gap: 24px;
}

.use-cases-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.use-cases-eyebrow {
  margin: 0;
  color: #1d4ed8;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.use-cases-heading {
  margin: 12px 0 0;
  color: #0f172a;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
}

.use-cases-description {
  margin: 16px 0 0;
  color: #334155;
  font-size: 17px;
  line-height: 1.65;
  max-width: 560px;
}

.use-cases-cta {
  margin-top: 28px;
  border: 0;
  border-radius: 999px;
  background: #1d4ed8;
  color: #ffffff;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
}

.use-cases-visual {
  position: relative;
  min-height: 300px;
}

.use-cases-visual-card {
  height: 100%;
  border-radius: 20px;
  background:
    radial-gradient(circle at 15% 10%, rgba(255, 255, 255, 0.65) 0, transparent 26%),
    linear-gradient(135deg, #60a5fa 0%, #1d4ed8 100%);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.25);
}

.badge {
  position: absolute;
  border-radius: 999px;
  background: #22c55e;
  color: #ffffff;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  box-shadow: 0 10px 22px rgba(34, 197, 94, 0.35);
}

.badge-top {
  top: 18px;
  left: -14px;
}

.badge-middle {
  right: 14px;
  top: 44%;
}

.badge-bottom {
  left: 24px;
  bottom: 18px;
}

@media (max-width: 960px) {
  .use-cases-section {
    padding: 64px 20px;
  }

  .use-cases-card {
    grid-template-columns: 1fr;
    padding: 22px;
  }

  .use-cases-heading {
    font-size: 26px;
  }

  .use-cases-visual {
    min-height: 260px;
  }

  .badge-top {
    left: 10px;
  }
}
</style>
