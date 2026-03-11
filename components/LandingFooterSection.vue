<script setup lang="ts">
const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

const productLinks = [
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Integrations', href: '#' },
]
</script>

<template>
  <footer class="footer-wrap">
    <div class="footer-container">
      <section class="footer-column footer-brand" aria-label="Company information">
        <p class="footer-logo">AskGPT</p>
        <address class="footer-address">
          123 Market Street<br>
          San Francisco, CA 94103<br>
          United States
        </address>
      </section>

      <section class="footer-column" aria-label="Legal links">
        <h2 class="footer-title">Legal</h2>
        <ul class="footer-links">
          <li v-for="link in legalLinks" :key="link.label">
            <a class="footer-link" :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </section>

      <section class="footer-column" aria-label="Products links">
        <h2 class="footer-title">Products</h2>
        <ul class="footer-links">
          <li v-for="link in productLinks" :key="link.label">
            <a class="footer-link" :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </section>

      <section class="footer-column" aria-label="Newsletter">
        <h2 class="footer-title">Newsletter</h2>
        <form class="footer-newsletter" @submit.prevent>
          <label class="sr-only" for="footer-newsletter-email">Email address</label>
          <input
            id="footer-newsletter-email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Enter your email"
            class="footer-input"
          >
        </form>
      </section>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrap {
  padding: 0 24px 40px;
}

.footer-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 36px 32px;
  border-radius: 20px;
  background: #edf1fc;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.footer-column {
  min-width: 0;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-logo {
  margin: 0;
  color: #0f172a;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
}

.footer-title {
  margin: 0;
  color: #111827;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
}

.footer-address,
.footer-link {
  color: #4b5563;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.footer-address {
  margin: 0;
  font-style: normal;
}

.footer-links {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.footer-link {
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-newsletter {
  margin-top: 12px;
}

.footer-input {
  width: 100%;
  border: 1px solid #cdd5e7;
  border-radius: 10px;
  background: #ffffff;
  color: #4b5563;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px 14px;
  outline: none;
}

.footer-input::placeholder {
  color: #94a3b8;
}

.footer-input:focus {
  border-color: #94a3b8;
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .footer-wrap {
    padding: 0 16px 32px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    padding: 28px 20px;
  }
}
</style>
