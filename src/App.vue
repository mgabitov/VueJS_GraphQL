<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>
  import ProductList from "./components/ProductList";
  import Update from "./components/Update";
  export default {
    name: "app",
    components: {
      Update,
      ProductList
    },
    created() {
      this.$store.dispatch('getProducts');
    }

  };
</script>
<style>
  .app {
    margin: auto;
    width: 50%;
  }
  .img-wrapper {
    display: flex;
    justify-content: center;
  }
</style>