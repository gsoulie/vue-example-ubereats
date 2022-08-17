<template>

  <router-view/>

</template>

<script lang="ts">
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
@import url('./styles/reset.scss');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
