<template>
  <svg
    class="transition-colors duration-300 in-out 029-canyon-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="029-canyon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m7.5 411.873c241.501 0 248.303-75.557 476.583-79.813 11.206-.209 20.417 8.788 20.417 19.996v132.442c0 11.046-8.954 20-20 20h-457c-11.046 0-20-8.954-20-20z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '029-canyon',
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
