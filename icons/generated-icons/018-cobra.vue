<template>
  <svg
    class="transition-colors duration-300 in-out 018-cobra-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512.016 512.016"
    :aria-labelledby="018-cobra"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m176.008 344.516h-48.5c-22.091 0-40 17.909-40 40 0 22.091 17.909 40 40 40h68.5c55.228 0 100-44.772 100-100v-20c0 22.091-17.909 40-40 40s-40-17.909-40-40c0 22.091-17.909 40-40 40z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '018-cobra',
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
