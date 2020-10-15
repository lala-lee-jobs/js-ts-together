<template>
  <div style="border: 1px solid black;margin: 10px;">
    <h2>PureBook.vue - script use JS</h2>
    <div>{{ bookName }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PureBook',
  props: {
    name: String,
  },
  setup(props) {
    console.log(props.name);
    const bookName = ref(props.name);
    return {
      bookName,
    };
  },
};
</script>
