<template>
  <svg
    class="transition-colors duration-300 in-out 008-hot-icon"
    :width="width"
    :height="height"
    viewBox="0 0 514.188 514.188"
    :aria-labelledby="008-hot"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m287.094 352.099c-69.036 0-125-55.964-125-125 0-26.858 8.473-51.736 22.889-72.111-31.997 22.638-52.889 59.934-52.889 102.111 0 69.036 55.964 125 125 125 42.177 0 79.473-20.891 102.111-52.889-20.375 14.415-45.253 22.889-72.111 22.889z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '008-hot',
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
