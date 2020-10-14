<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
  <br/><br/>
  <div>
    {{ state.mountedString }}
  </div>  
</template>

<script lang="ts">
import { defineComponent, reactive, computed,onMounted } from 'vue'

interface State {
  count: number
  double: number
  mountedString?: string
}
export default defineComponent({
  name: 'CounterTS',
  setup() {
    const state: State = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    const increment = () => {
      state.count++
    };

    onMounted(() => {
      state.mountedString = 'CounterTS is mounted!';
    });

    return {
      state,
      increment
    };
  },
});
</script>