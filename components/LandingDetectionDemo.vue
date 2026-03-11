<template>
  <section class="detection-section" aria-label="AI detection demo section">
    <div class="detection-card" aria-label="AI Content Detection demo">
      <h2 class="card-title">AI Content Detection</h2>

      <div class="source-actions" role="group" aria-label="Input source">
        <button type="button" class="source-btn">Paste Text</button>
        <button type="button" class="source-btn">Sample Text</button>
        <button type="button" class="source-btn">Upload File</button>
      </div>

      <textarea
        class="content-input"
        placeholder="Paste text to check for AI-generated content..."
      />

      <button type="button" class="analyze-btn">Analyze content</button>

      <div class="trust-badges" aria-label="Trust indicators">
        <div class="trust-item">
          <span class="trust-icon" aria-hidden="true">&check;</span>
          <span>99.7% Accurate</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon" aria-hidden="true">&check;</span>
          <span>Secure Analysis</span>
        </div>
        <div class="trust-item confirmed-by">
          <span class="trust-icon" aria-hidden="true">&check;</span>
          <span>Confirmed by</span>
          <span class="logo">MIT</span>
          <span class="logo">Stanford</span>
          <span class="logo">Forbes</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.detection-section {
  padding: 64px 16px;
  background: #ffffff;
}

.detection-card {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 24px;
  border: 2px solid #60a5fa;
  box-shadow: 0 0 13px #60a5fa;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.card-title {
  margin: 0;
  font-size: 20px;
  line-height: 1.25;
  font-weight: 700;
  color: #111827;
}

.source-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.source-btn {
  width: 128px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  color: #111827;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.content-input {
  width: 100%;
  min-height: 176px;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  padding: 14px 16px;
  font-size: 15px;
  line-height: 1.5;
  color: #111827;
  resize: vertical;
  outline: none;
}

.content-input::placeholder {
  color: #9ca3af;
}

.content-input:focus {
  border-color: #93c5fd;
  box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
}

.analyze-btn {
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 12px;
  background: #e5e7eb;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 700;
  cursor: not-allowed;
}

.trust-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
}

.trust-icon {
  width: 16px;
  height: 16px;
  color: #16a34a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
}

.confirmed-by {
  gap: 8px;
}

.logo {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  color: #111827;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: #ffffff;
}

@media (max-width: 640px) {
  .detection-card {
    padding: 20px;
  }
}
</style>
