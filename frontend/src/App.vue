<template>
  <div class="container">
  <user />
  <chat />
  </div>
</template>

<script>
import user from './components/user.vue'
import chat from './components/chat.vue'

export default {
  name: 'App',
  components: {
    user, chat
  } 
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
}
.container{
  position: relative;
  // display: flex;
  // justify-content: space-around;
} 
</style>
