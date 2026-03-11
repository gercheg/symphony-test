<template>
  <section class="tools" aria-labelledby="writing-toolkit-title">
    <div class="tools__container">
      <h2 id="writing-toolkit-title" class="tools__title">A writing toolkit that has your back - start to finish</h2>

      <div class="tools__steps">
        <article class="tool-step">
          <div class="tool-step__content">
            <p class="tool-step__label">Step 1</p>
            <h3 class="tool-step__heading">Write it right, hit send</h3>
            <p class="tool-step__text">
              Paste your email and get instant correction notes before you hit send.
            </p>
          </div>

          <div class="tool-card tool-card--email" aria-label="Email correction example">
            <p class="tool-card__eyebrow">Draft email</p>
            <p class="tool-card__line">Many students experiance financial difficulties...</p>
            <p class="tool-card__line tool-card__line--muted">Many students experience financial difficulties...</p>
            <span class="correction-badge correction-badge--green">Corrected: experience</span>
          </div>
        </article>

        <article class="tool-step tool-step--reverse">
          <div class="tool-step__content">
            <p class="tool-step__label">Step 2</p>
            <h3 class="tool-step__heading">Sharper words, stronger impact</h3>
            <p class="tool-step__text">
              Use one-click rewrites that keep your intent and remove awkward phrasing.
            </p>
          </div>

          <div class="tool-card tool-card--rewrite" aria-label="Rewrite example with animated underline">
            <p class="tool-card__eyebrow">Rewrite mode</p>
            <p class="tool-card__line tool-card__line--rewrite">
              Hi team, I reviewed the latest copy and it looks great.
            </p>
            <p class="tool-card__line tool-card__line--muted">Let me know if you have any questions.</p>
            <span class="correction-badge correction-badge--blue">Clarity improved</span>
          </div>
        </article>

        <article class="tool-step">
          <div class="tool-step__content">
            <p class="tool-step__label">Step 3</p>
            <h3 class="tool-step__heading">Sound human, stay credible</h3>
            <p class="tool-step__text">
              Compare output quality across models and ship the strongest version.
            </p>
          </div>

          <div class="tool-card tool-card--gauge" aria-label="Quality gauge and model badges">
            <div class="gauge-wrap" role="img" aria-label="Quality score 100 percent">
              <div class="gauge"></div>
              <div class="gauge__center">
                <p class="gauge__value">100%</p>
                <p class="gauge__label">Human sounding</p>
              </div>
            </div>
            <div class="model-badges">
              <span class="model-badge">OpenAI GPT-5.1</span>
              <span class="model-badge">Claude</span>
              <span class="model-badge">Grok</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tools {
  padding: 120px 24px;
  background: #ffffff;
}

.tools__container {
  max-width: 1200px;
  margin: 0 auto;
}

.tools__title {
  margin: 0;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #111827;
}

.tools__steps {
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.tool-step {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 80px;
  align-items: center;
}

.tool-step--reverse .tool-step__content {
  order: 2;
}

.tool-step--reverse .tool-card {
  order: 1;
}

.tool-step__label {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4b5563;
}

.tool-step__heading {
  margin: 12px 0 0;
  font-size: 28px;
  line-height: 1.28;
  font-weight: 700;
  color: #111827;
}

.tool-step__text {
  margin: 14px 0 0;
  font-size: 17px;
  line-height: 1.65;
  color: #4b5563;
}

.tool-card {
  position: relative;
  border-radius: 18px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
}

.tool-card__eyebrow {
  margin: 0;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
}

.tool-card__line {
  margin: 12px 0 0;
  font-size: 16px;
  line-height: 1.6;
  color: #111827;
}

.tool-card__line--muted {
  color: #6b7280;
}

.correction-badge {
  display: inline-flex;
  align-items: center;
  margin-top: 18px;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
}

.correction-badge--green {
  color: #166534;
  background: #f0fdf4;
}

.correction-badge--blue {
  color: #1d4ed8;
  background: #eff6ff;
}

.tool-card__line--rewrite {
  position: relative;
  display: inline-block;
}

.tool-card__line--rewrite::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #3b82f6;
  transform-origin: left center;
  transform: scaleX(0);
  animation: underline-scale 0.5s ease-out infinite alternate;
}

@keyframes underline-scale {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.tool-card--gauge {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.gauge-wrap {
  position: relative;
  width: 100%;
  max-width: 330px;
  aspect-ratio: 2 / 1;
  margin: 0 auto;
}

.gauge {
  width: 100%;
  height: 100%;
  border-radius: 999px 999px 0 0;
  background:
    radial-gradient(circle at 50% 100%, #ffffff 58%, transparent 58%),
    linear-gradient(90deg, #60a5fa 0%, #22d3ee 52%, #34d399 100%);
}

.gauge__center {
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  text-align: center;
}

.gauge__value {
  margin: 0;
  font-size: 34px;
  line-height: 1.1;
  font-weight: 700;
  color: #111827;
}

.gauge__label {
  margin: 2px 0 0;
  font-size: 13px;
  line-height: 1.3;
  color: #6b7280;
}

.model-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.model-badge {
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid #dbeafe;
  background: #eff6ff;
  color: #1e40af;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
}

@media (max-width: 960px) {
  .tools {
    padding: 88px 20px;
  }

  .tools__steps {
    margin-top: 42px;
    gap: 40px;
  }

  .tool-step {
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }

  .tool-step--reverse .tool-step__content,
  .tool-step--reverse .tool-card {
    order: initial;
  }

  .tool-step__heading {
    font-size: 24px;
  }
}
</style>
