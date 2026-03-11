<template>
  <section class="tools-section" aria-labelledby="ai-tools-heading">
    <div class="tools-section__header">
      <h2 id="ai-tools-heading">AI Tools</h2>
      <p>Choose a category to explore tools tailored to your workflow.</p>
    </div>

    <div class="tools-section__filters" role="tablist" aria-label="Tool categories">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        role="tab"
        :aria-selected="activeCategory === category"
        :class="['tools-section__filter', { 'is-active': activeCategory === category }]"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <TransitionGroup name="tool-card" tag="div" class="tools-section__grid">
      <article
        v-for="tool in filteredTools"
        :key="tool.name"
        class="tool-card"
      >
        <span class="tool-card__category">{{ tool.category }}</span>
        <h3>{{ tool.name }}</h3>
      </article>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

type Category = "All" | "Writing" | "Originality" | "Creation" | "PDFs";

interface ToolItem {
  name: string;
  category: Exclude<Category, "All">;
}

const categories: Category[] = ["All", "Writing", "Originality", "Creation", "PDFs"];

const tools: ToolItem[] = [
  { name: "Paraphraser", category: "Writing" },
  { name: "Grammar Checker", category: "Writing" },
  { name: "Paragraph Rewriter", category: "Writing" },
  { name: "AI Detector", category: "Originality" },
  { name: "Humanizer", category: "Originality" },
  { name: "Plagiarism Checker", category: "Originality" },
  { name: "Cover Letter Generator", category: "Creation" },
  { name: "Slogan Generator", category: "Creation" },
  { name: "Social Media Post Writer", category: "Creation" },
  { name: "Translator", category: "Creation" },
  { name: "PDF Editor", category: "PDFs" },
  { name: "PDF Converter", category: "PDFs" },
];

const activeCategory = ref<Category>("All");

const filteredTools = computed(() =>
  activeCategory.value === "All"
    ? tools
    : tools.filter((tool) => tool.category === activeCategory.value),
);
</script>

<style scoped>
.tools-section {
  max-width: 1080px;
  margin: 0 auto;
  padding: 48px 24px;
}

.tools-section__header h2 {
  margin: 0;
  font-size: 2rem;
  line-height: 1.2;
}

.tools-section__header p {
  margin-top: 10px;
  color: #4b5563;
}

.tools-section__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.tools-section__filter {
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #1f2937;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 200ms ease;
}

.tools-section__filter.is-active {
  background: #111827;
  border-color: #111827;
  color: #ffffff;
}

.tools-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.tool-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  background: #ffffff;
}

.tool-card__category {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #6b7280;
}

.tool-card h3 {
  margin: 10px 0 0;
  font-size: 1rem;
  line-height: 1.4;
  color: #111827;
}

.tool-card-enter-active,
.tool-card-leave-active {
  transition: opacity 350ms ease, transform 350ms ease;
}

.tool-card-enter-from,
.tool-card-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.tool-card-move {
  transition: transform 350ms ease;
}
</style>