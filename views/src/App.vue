<template>
  <div class="forver" id="forver">
    <Fheader></Fheader>
    <div id="app" class="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Fheader from './components/global/header.vue'
  export default {
    components: {
      Fheader
    },
    name: 'app',
    data () {
      return {}
    }
  }
</script>

<style>
  @import "assets/index.css";
</style>

