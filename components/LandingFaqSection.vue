<script setup lang="ts">
import { ref } from 'vue'

type FaqItem = {
  question: string
  answer: string
}

const items: FaqItem[] = [
  {
    question: 'What can I use AskGPT for?',
    answer: 'AskGPT is built for serious writing. Draft, rewrite, humanize, check AI content, scan for plagiarism, fix grammar, translate, and even edit or sign PDFs'
  },
  {
    question: 'Can AskGPT detect AI-generated content?',
    answer: 'Yes. AskGPT can help analyze text for indicators of AI-generated writing.'
  },
  {
    question: 'Can it humanize AI-written text?',
    answer: 'Yes. It can rewrite AI-like drafts so they read more naturally and sound more human.'
  },
  {
    question: 'Does AskGPT check for plagiarism?',
    answer: 'Yes. You can scan writing for potential plagiarism issues before publishing or submitting.'
  },
  {
    question: 'Can AskGPT improve my writing?',
    answer: 'Yes. AskGPT helps improve clarity, grammar, tone, and structure in your writing.'
  },
  {
    question: 'What types of writing is it built for?',
    answer: 'It is built for professional and academic writing, including essays, emails, reports, and more.'
  },
  {
    question: 'Does AskGPT support multiple languages?',
    answer: 'Yes. AskGPT supports multilingual writing and translation workflows.'
  },
  {
    question: 'Can I edit or sign PDFs?',
    answer: 'Yes. AskGPT also includes tools to edit and sign PDF documents.'
  }
]

const openIndex = ref(0)

const toggleItem = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section class="faq-section" aria-labelledby="faq-heading">
    <h2 id="faq-heading" class="faq-title">
      FAQ
    </h2>

    <div class="faq-accordion">
      <article
        v-for="(item, index) in items"
        :key="item.question"
        class="faq-item"
      >
        <button
          class="faq-question"
          :aria-expanded="openIndex === index ? 'true' : 'false'"
          :aria-controls="`faq-answer-${index}`"
          @click="toggleItem(index)"
        >
          <span>{{ item.question }}</span>
          <span class="faq-icon" aria-hidden="true">
            {{ openIndex === index ? '-' : '+' }}
          </span>
        </button>

        <div
          v-if="openIndex === index"
          :id="`faq-answer-${index}`"
          class="faq-answer"
        >
          {{ item.answer }}
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 96px 24px;
}

.faq-title {
  margin: 0;
  text-align: center;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
}

.faq-accordion {
  width: 656px;
  max-width: 100%;
  margin: 48px auto 0;
}

.faq-item {
  border-bottom: 1px solid #d1d5db;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 0;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: #111827;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
}

.faq-icon {
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
}

.faq-answer {
  padding: 0 0 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #4b5563;
}
</style>
