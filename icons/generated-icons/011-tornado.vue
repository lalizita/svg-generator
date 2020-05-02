<template>
  <svg
    class="transition-colors duration-300 in-out 011-tornado-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512.014 512.014"
    :aria-labelledby="011-tornado"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m340.98 213.938c-136.987-20.628-241.307-82.039-233.006-137.165 5.312-35.278 55.461-59.431 126.786-66.845-120.924-11.011-219.228 16.658-226.786 66.845-8.301 55.126 96.019 116.536 233.006 137.165 49.322 7.427 96.153 8.554 136.282 4.383-11.897-1.083-24.011-2.535-36.282-4.383z&#34; fill=&#34;#ffe1bd&#34;/&gt;&lt;/g&gt;&lt;g&gt;&lt;g&gt;&lt;g&gt;&lt;ellipse cx=&#34;176.454&#34; cy=&#34;125.043&#34; fill=&#34;#ff7591&#34; rx=&#34;29.355&#34; ry=&#34;23.377&#34;/&gt;&lt;/g&gt;&lt;g&gt;&lt;ellipse cx=&#34;335.568&#34; cy=&#34;125.043&#34; fill=&#34;#ff7591&#34; rx=&#34;29.355"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '011-tornado',
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
