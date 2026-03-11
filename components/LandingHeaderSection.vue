<template>
  <header
    class="box-border flex h-[88px] items-center justify-between border-b border-[#d1d5db] px-[168px] py-4"
  >
    <a
      href="/"
      class="inline-flex items-center gap-2 text-[#030712] no-underline"
      aria-label="AskGPT home"
    >
      <svg
        class="h-8 w-8 shrink-0"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 2L19.954 12.046L30 16L19.954 19.954L16 30L12.046 19.954L2 16L12.046 12.046L16 2Z"
          fill="#030712"
        />
      </svg>
      <span class="font-['SF_Pro_Display'] text-[32px] font-medium leading-[1]">
        AskGPT
      </span>
    </a>

    <button
      type="button"
      class="inline-flex h-14 items-center gap-2 rounded-[999px] bg-[#030712] px-6 text-white"
      aria-label="Try AskGPT"
    >
      <svg
        class="h-5 w-5 shrink-0"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 10H16M16 10L11 5M16 10L11 15"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="font-['SF_Pro_Display'] text-[18px] font-medium leading-[1]">
        Try AskGPT
      </span>
    </button>
  </header>
</template>
