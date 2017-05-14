<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import store from './store';
  import { router } from './bootstrap';

  export default {
    name: 'ChatApplication',
    router,
    store,
    mounted() {
      this.$socket.on('newMessage', (message) => {
        store.dispatch('newMessage', message);
      });
    },
    data() {
      return {
        message: null,
      };
    },
    methods: {
      addMessage(message) {
        this.$store.dispatch('newMessage', message);
      },
    },
  };
</script>

<style>
</style>
