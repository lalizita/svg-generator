<template>
  <svg
    class="transition-colors duration-300 in-out 043-sandstorm-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="043-sandstorm"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m474.5 67.5h-87-152.5c-22.091 0-40 17.909-40 40 0 22.091 17.909 40 40 40h66c16.569 0 30 13.431 30 30s-13.431 30-30 30h-161c-16.569 0-30-13.431-30-30s13.431-30 30-30h-92.5c-22.091 0-40-17.909-40-40s17.909-40 40-40h132.5c-16.569 0-30-13.431-30-30s13.431-30 30-30h294.5c16.569 0 30 13.431 30 30s-13.431 30-30 30z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '043-sandstorm',
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
