<template>
  <h2>JSComponent</h2>
  <div>Greeting:{{ greeting }}</div>
  <br />
  <div>
    <button @click="changeGreeting">Change Greeting</button>
  </div>
  <br />
  <div>Mounted:{{ mountedString }}</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'JSComponent',
  setup() {
    const greeting = ref('Hello World');
    const mountedString = ref('');

    const changeGreeting = () => {
      greeting.value = 'Trigger Change Greenting';
    };

    onMounted(() => {
      mountedString.value = 'JSComponent is mounted!';
    });

    return {
      greeting,
      changeGreeting,
      mountedString,
    };
  },
};
</script>
