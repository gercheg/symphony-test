<template>
  <header
    class="box-border flex h-[88px] items-center justify-between border-b border-[#d1d5db] px-[168px] py-4"
  >
    <a
      href="/"
      class="inline-flex h-[38px] w-[160px] items-center gap-[11px] text-[#030712] no-underline"
      aria-label="AskGPT home"
    >
      <svg
        class="h-8 w-8 shrink-0"
        viewBox="0 0 65 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M64.88 21.23l-4.34-7.51999-23.76 13.72 0-27.43001-8.68 0 0 27.43001-23.76-13.72-4.34 7.51999 23.76 13.72-23.76 13.72 4.34 7.52002 23.76-13.72 0 27.42999 8.68 0 0-27.42999 23.76 13.72 4.34-7.52002-23.76-13.72 23.76-13.72z m-24.37 13.72l-4.04001 6.99002-8.07 0-4.03999-6.99002 4.03999-6.98999 8.07 0 4.04001 6.98999z"
          fill="#030712"
        />
      </svg>
      <span class="font-['SF_Pro_Display'] text-[32px] font-medium leading-[1]">
        AskGPT
      </span>
    </a>

    <button
      type="button"
      class="inline-flex h-14 items-center gap-[6px] rounded-[999px] bg-[#030712] px-6 text-white"
      aria-label="Try AskGPT"
    >
      <svg
        class="h-[15.5px] w-4 shrink-0"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8.22 3.22L7.16 4.28L10.44 7.55H2V9.05H10.44L7.16 12.33L8.22 13.39L13.31 8.3L8.22 3.22Z"
          fill="#ffffff"
        />
      </svg>
      <span class="font-['SF_Pro_Display'] text-[18px] font-medium leading-[1.39]">
        Try AskGPT
      </span>
    </button>
  </header>
</template>

