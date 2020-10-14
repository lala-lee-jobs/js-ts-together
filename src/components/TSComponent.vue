<template>
  <h2>TSComponent</h2>
  <div>Greeting:{{greeting}}</div><br/>
  <div>
    <button @click="changeGreeting">Change Greeting</button>
  </div><br/>
  <div>Mounted:{{mountedString}}</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'

export default defineComponent({
  name: 'TSComponent',
  setup() {
    const greeting = ref<string>('Hello World');
    const mountedString = ref<string>('');

    const changeGreeting = () => {
      greeting.value = 'Trigger Change Greenting';
    };

    onMounted(() => {
      mountedString.value = 'TSComponent is mounted!';
    });

    return {
      greeting,
      changeGreeting,
      mountedString
    };
  }
});
</script>
