<template>
  <svg
    class="transition-colors duration-300 in-out 010-canteen-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="010-canteen"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m439.896 427.566-297.832-313.175c-4.185-4.4-9.991-6.891-16.064-6.891-33.137 0-60 26.863-60 60v1.657c0 5.687 2.185 11.156 6.104 15.277l297.832 313.175c4.185 4.4 9.991 6.891 16.064 6.891 33.137 0 60-26.863 60-60v-1.657c0-5.687-2.185-11.156-6.104-15.277z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '010-canteen',
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
