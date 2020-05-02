<template>
  <svg
    class="transition-colors duration-300 in-out 036-map-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512.016 512.016"
    :aria-labelledby="036-map"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m450.988 8.644c-12.946-4.54-26.48 5.208-26.48 18.927v164.669c0 5.304 2.107 10.391 5.858 14.142l20 20c7.81 7.81 7.81 20.474 0 28.284l-20 20c-3.751 3.751-5.858 8.838-5.858 14.142v37.864c0 9.52 6.796 17.561 16.123 19.47 36.455 7.46 63.877 39.715 63.877 78.375v-340.36c0-34.902-22.351-64.584-53.52-75.513z&#34; fill=&#34;#fff1ce&#34;/&gt;&lt;/g&gt;&lt;g&gt;&lt;circle cx=&#34;170.008&#34; cy=&#34;183.062&#34; fill=&#34;#b77158"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '036-map',
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
