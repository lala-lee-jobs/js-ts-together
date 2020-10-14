<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
  <br/><br/>
  <div>
    {{ state.mountedString }}
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
      mountedString: '',
    });

    const increment = () => {
      state.count++
    };

    onMounted(() => {
      state.mountedString = 'CounterJS is mounted!';
    });

    return {
      state,
      increment
    };
  }
}
</script>
