<template>
  <svg
    class="transition-colors duration-300 in-out 045-signpost-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="045-signpost"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m178.019 297.5v-80c0-11.046 8.954-20 20-20h-93.333c-6.687 0-12.932 3.342-16.641 8.906l-26.667 40c-4.479 6.718-4.479 15.47 0 22.188l26.667 40c3.709 5.564 9.954 8.906 16.641 8.906h93.333c-11.046 0-20-8.954-20-20z&#34; fill=&#34;#c8866a&#34;/&gt;&lt;/g&gt;&lt;g&gt;&lt;g&gt;&lt;g&gt;&lt;ellipse cx=&#34;146.443&#34; cy=&#34;266.063&#34; fill=&#34;#fff&#34; rx=&#34;29.355&#34; ry=&#34;23.377&#34;/&gt;&lt;/g&gt;&lt;g&gt;&lt;ellipse cx=&#34;305.557&#34; cy=&#34;266.063&#34; fill=&#34;#fff&#34; rx=&#34;29.355"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '045-signpost',
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
