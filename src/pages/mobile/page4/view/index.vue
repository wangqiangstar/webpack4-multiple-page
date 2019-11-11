<template>
  <div id="app">
    <h1 style="width: 500px">demo</h1>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  computed: {
  },
  mounted() {
    console.log("vue进入");
    this.$service.cs.getCeshi()
  }
}
</script>

<style>
h1{
  width: 500px;
  height: 500px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
