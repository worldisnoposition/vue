<template>
  <div class="dash">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scopedApp>
#app {
    width:30px;
    height:30px;
}
</style>
