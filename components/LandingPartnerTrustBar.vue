<script setup lang="ts">
const logoPlaceholders = [
  'MIT',
  'Cornell University',
  'DSU',
  'IIM',
  'Indiana University',
  'BIUM',
  'NYC',
  'NYC',
  'NYC'
]
</script>

<template>
  <section class="partner-trust" aria-labelledby="partner-trust-title">
    <div class="partner-trust__container">
      <h2 id="partner-trust-title" class="partner-trust__title">
        AI writing tools trusted across universities and workplaces
      </h2>

      <ul class="partner-trust__logos" aria-label="University and workplace partner logos">
        <li
          v-for="(logo, index) in logoPlaceholders"
          :key="`${logo}-${index}`"
          class="partner-trust__logo-item"
        >
          <div class="partner-trust__logo-box">
            {{ logo }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.partner-trust {
  padding: 24px;
}

.partner-trust__container {
  margin: 0 auto;
  max-width: 1200px;
  background: #f3f4f6;
  border-radius: 0 0 20px 0;
  padding: 32px 24px;
}

.partner-trust__title {
  margin: 0;
  color: #111827;
  font-size: 24px;
  line-height: 1.33;
  font-weight: 700;
}

.partner-trust__logos {
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.partner-trust__logo-item {
  flex: 0 0 auto;
}

.partner-trust__logo-box {
  width: 192px;
  height: 108px;
  padding: 0 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  background: #ffffff;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 600;
  opacity: 0.7;
  white-space: nowrap;
}

@media (max-width: 960px) {
  .partner-trust {
    padding: 20px;
  }

  .partner-trust__container {
    padding: 24px 16px;
  }

  .partner-trust__logo-box {
    width: 160px;
    height: 90px;
  }
}
</style>
