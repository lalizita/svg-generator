<template>
  <svg
    class="transition-colors duration-300 in-out 013-compass-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="013-compass"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m212.291 259.854c5.8-16.286 26.592-20.971 38.817-8.747l-35.355-35.355c-12.225-12.225-33.016-7.54-38.817 8.747l-44.524 125.02c-6.656 18.691 11.379 36.726 30.07 30.07l8.209-2.924z&#34; fill=&#34;#7c96b3&#34;/&gt;&lt;/g&gt;&lt;g&gt;&lt;circle cx=&#34;256&#34; cy=&#34;256&#34; fill=&#34;#ffde83"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '013-compass',
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
