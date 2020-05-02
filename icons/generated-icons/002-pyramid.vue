<template>
  <svg
    class="transition-colors duration-300 in-out 002-pyramid-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512.026 512.026"
    :aria-labelledby="002-pyramid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m333.971 387.571c0-14.643-10.608-16.019-23.693-16.019-13.086 0-23.694 1.376-23.694 16.019s10.608 26.513 23.694 26.513c13.085 0 23.693-11.87 23.693-26.513z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '002-pyramid',
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
