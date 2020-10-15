<template>
  <h2>Book.vue - script use TS</h2>
  <div>{{ bookCount }}</div>
  <div>
    <button @click="minusBookCount">minusBookCount</button>&nbsp;
    <button @click="addBookCount">addBookCount</button>
  </div>
  <div v-for="n in bookCount" :key="n">
    <PureBook :name="'This is my book'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import store from '@/store';
import PureBook from '@/components/PureBook.vue';

export default defineComponent({
  name: 'CounterTS',
  components: {
    PureBook,
  },
  setup() {
    const bookCount = computed(() => store.state.bookCount);
    const addBookCount = () => {
      store.commit('increment', 1);
    };
    const minusBookCount = () => {
      store.commit('minus', 1);
    };

    return {
      bookCount,
      addBookCount,
      minusBookCount,
    };
  },
});
</script>
