<template>
  <svg
    class="transition-colors duration-300 in-out 028-turtle-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="028-turtle"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m382.226 464.5c-12.302 0-32.247 0-44.548 0s-22.274 9.972-22.274 22.274v17.726h44.548 24.548c10.74 0 19.477-8.472 19.954-19.093-.707-11.665-10.386-20.907-22.228-20.907z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '028-turtle',
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
