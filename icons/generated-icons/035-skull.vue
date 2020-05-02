<template>
  <svg
    class="transition-colors duration-300 in-out 035-skull-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="035-skull"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m256 444.871c-11.046 0-20-8.954-20-20v-80c0-11.046 8.954-20 20-20 11.046 0 20 8.954 20 20v80c0 11.046-8.954 20-20 20z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '035-skull',
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
