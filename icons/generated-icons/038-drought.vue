<template>
  <svg
    class="transition-colors duration-300 in-out 038-drought-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="038-drought"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m392.215 388.326v-34.766c0-2.91 1.25-5.521 3.234-7.349l-37.086 15.464c-8.199 3.419-8.203 15.032-.006 18.457l37 15.459c-1.93-1.823-3.142-4.4-3.142-7.265z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '038-drought',
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
