<template>
  <svg
    class="transition-colors duration-300 in-out 006-oil barrel-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="006-oil barrel"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m247.776 201.578c-11.275 12.743-31.443 39.613-32.492 69.756-.801 23.014 17.323 42.664 40.35 42.448 21.919-.206 39.625-18.039 39.625-40.007 0-31.114-20.939-59.088-32.521-72.181-3.975-4.493-10.986-4.509-14.962-.016z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '006-oil barrel',
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
