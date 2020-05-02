<template>
  <svg
    class="transition-colors duration-300 in-out 037-location-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="037-location"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m332.781 134.793c-11.046 0-20 8.954-20 20v79.471c22.091 0 40-17.909 40-40v-39.471c0-11.045-8.954-20-20-20z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '037-location',
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
