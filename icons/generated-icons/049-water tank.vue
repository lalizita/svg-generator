<template>
  <svg
    class="transition-colors duration-300 in-out 049-water tank-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="049-water tank"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m279.694 205.659c0-14.643-10.608-16.019-23.694-16.019-13.085 0-23.693 1.376-23.693 16.019s10.608 26.513 23.693 26.513c13.086-.001 23.694-11.871 23.694-26.513z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '049-water tank',
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
