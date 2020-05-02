<template>
  <svg
    class="transition-colors duration-300 in-out 005-palm tree-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512.016 512.016"
    :aria-labelledby="005-palm tree"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m256.008 7.5c-44.183 0-80 35.817-80 80 0 96.516 58.611 216.039 80 216.039s80-119.523 80-216.039c0-44.183-35.817-80-80-80z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '005-palm tree',
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
