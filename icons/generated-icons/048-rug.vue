<template>
  <svg
    class="transition-colors duration-300 in-out 048-rug-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512.016 512.016"
    :aria-labelledby="048-rug"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m440.631 346.142c36.455 7.459 63.877 39.715 63.877 78.375v-177.845c0 22.091-17.909 40-40 40s-40-17.909-40-40v80c0 9.52 6.796 17.561 16.123 19.47z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '048-rug',
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
