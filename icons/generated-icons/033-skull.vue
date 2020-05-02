<template>
  <svg
    class="transition-colors duration-300 in-out 033-skull-icon"
    :width="width"
    :height="height"
    viewBox="0 0 511.168 511.168"
    :aria-labelledby="033-skull"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m327.584 407.5c9.941 0 18 8.059 18 18v78.168h-36v-78.168c0-9.941 8.059-18 18-18z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '033-skull',
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
