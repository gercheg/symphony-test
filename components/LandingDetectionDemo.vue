<template>
  <section class="detection-demo">
    <div class="demo-card">
      <h2 class="title">AI Content Detection</h2>

      <div class="trust-row" aria-label="Trust indicators">
        <div class="trust-item">
          <span class="trust-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path d="M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3Z" />
            </svg>
          </span>
          <span>End-to-end encrypted</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path
                d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm1 11h4v2h-6V7h2Z"
              />
            </svg>
          </span>
          <span>Auto-deleted in 24 hrs</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
            </svg>
          </span>
          <span>Results in 30 seconds</span>
        </div>
      </div>

      <div class="brands" aria-label="Confirmed by">
        <span class="brands-label">Confirmed by:</span>
        <span>Turnitin</span>
        <span>Scribbr</span>
        <span>GPTZero</span>
        <span>Copyleaks</span>
      </div>

      <textarea
        class="input"
        rows="6"
        placeholder="Paste your AI-generated content here... (Try it now - no signup required)"
      />

      <button type="button" class="analyze-btn">Analyze Content</button>
    </div>
  </section>
</template>

<style scoped>
.detection-demo {
  width: 100%;
  display: flex;
  justify-content: center;
}

.demo-card {
  width: 1200px;
  max-width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 24px;
  background: #ffffff;
}

.title {
  margin: 0 0 16px;
  font-weight: 400;
}

.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  font-size: 14px;
}

.trust-icon {
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.trust-icon svg {
  width: 18px;
  height: 18px;
  fill: #16a34a;
}

.brands {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
  color: #4b5563;
  font-size: 14px;
}

.brands-label {
  color: #111827;
}

.input {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 14px 16px;
  resize: vertical;
  margin-bottom: 16px;
  font: inherit;
}

.analyze-btn {
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 999px;
  background: #111827;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
}
</style>
