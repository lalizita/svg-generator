<template>
  <svg
    class="transition-colors duration-300 in-out 022-bedouin-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="022-bedouin"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m173.551 175.05c0-22.091 17.909-40 40-40h-98.76c-22.091 0-40 17.909-40 40 0 22.091 17.909 40 40 40h98.76c-22.091 0-40-17.909-40-40z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '022-bedouin',
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
