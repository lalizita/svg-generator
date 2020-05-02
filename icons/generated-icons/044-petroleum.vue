<template>
  <svg
    class="transition-colors duration-300 in-out 044-petroleum-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="044-petroleum"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m90.975 107.051c-28.129 0-50.932-22.803-50.932-50.932 0-6.243 1.128-12.221 3.184-17.748-19.377 7.205-33.184 25.862-33.184 47.748 0 28.129 22.803 50.932 50.932 50.932 21.886 0 40.543-13.807 47.748-33.184-5.526 2.056-11.505 3.184-17.748 3.184z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '044-petroleum',
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
