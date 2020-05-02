<template>
  <svg
    class="transition-colors duration-300 in-out 032-tent-icon"
    :width="width"
    :height="height"
    viewBox="0 0 511.998 511.998"
    :aria-labelledby="032-tent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m193.551 177.493c0-11.046 8.954-20 20-20h-75.051c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20h75.051c-11.046 0-20-8.955-20-20z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '032-tent',
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
