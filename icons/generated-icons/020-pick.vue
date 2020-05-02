<template>
  <svg
    class="transition-colors duration-300 in-out 020-pick-icon"
    :width="width"
    :height="height"
    viewBox="0 0 511.978 511.978"
    :aria-labelledby="020-pick"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m270.489 205.052 100.2-100.2c10.062-10.062 26.375-10.062 36.436 0l-36.436-36.436c-10.062-10.062-26.375-10.062-36.436 0l-100.2 100.2c-10.062 10.062-10.062 26.375 0 36.436l36.436 36.436c-10.061-10.061-10.062-26.374 0-36.436z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '020-pick',
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
};
</script>
