<template>
  <svg
    class="transition-colors duration-300 in-out 023-eagle-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512.75 512.75"
    :aria-labelledby="023-eagle"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m59.254 373.044 2.153 2.153c.589.589 1.191 1.16 1.785 1.741l-47.532 47.532c-7.81 7.81-7.81 20.474 0 28.284 34.111 34.111 89.417 34.111 123.528 0l22.134-22.134c67.342 15.508 140.923-2.957 193.39-55.424l10.321-10.321c-44.997 44.997-117.951 44.997-162.947 0-44.997-44.997-44.997-117.951 0-162.947l-142.832 142.831c-7.81 7.811-7.81 20.474 0 28.285z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '023-eagle',
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
