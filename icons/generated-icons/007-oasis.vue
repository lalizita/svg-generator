<template>
  <svg
    class="transition-colors duration-300 in-out 007-oasis-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="007-oasis"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m7.5 411.875c248.5 0 248.5-80 497-80v152.625c0 11.046-8.954 20-20 20h-457c-11.046 0-20-8.954-20-20z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '007-oasis',
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
