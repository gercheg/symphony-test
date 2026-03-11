<script setup lang="ts">
import { ref } from 'vue'

type FaqItem = {
  question: string
  answer: string
}

const items: FaqItem[] = [
  {
    question: 'How does AskGPT improve my writing quality?',
    answer: 'AskGPT reviews your draft and helps refine clarity, tone, and structure so your final writing is sharper and easier to understand.'
  },
  {
    question: 'Can I use AskGPT for different writing formats?',
    answer: 'Yes. You can use it for emails, reports, proposals, product copy, social posts, and more with guidance tailored to each format.'
  },
  {
    question: 'Will my original voice still be preserved?',
    answer: 'Yes. Suggestions are designed to strengthen what you wrote while keeping your intent and style intact.'
  },
  {
    question: 'Is AskGPT suitable for professional teams?',
    answer: 'AskGPT supports consistent communication standards and faster iteration, which makes it practical for team workflows.'
  },
  {
    question: 'Does AskGPT support multilingual writing?',
    answer: 'Yes. You can draft and improve content in multiple languages while maintaining natural phrasing and correct tone.'
  },
  {
    question: 'Can I control how formal or casual the output is?',
    answer: 'You can. AskGPT can adjust style and tone to match the audience and channel you are writing for.'
  },
  {
    question: 'Is my data kept private and secure?',
    answer: 'Your content is handled with privacy in mind, and access is limited to provide a secure writing experience.'
  },
  {
    question: 'How quickly can I get started?',
    answer: 'You can start immediately. Paste your draft, choose the outcome you need, and apply suggestions in minutes.'
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
      Frequently Asked Questions
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
            {{ openIndex === index ? '−' : '+' }}
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
