<template>
<header>
  <app-container>
    <router-link to="/">Home</router-link>
    <router-link to="/main">Main</router-link>
  </app-container>
</header>
</template>

<script>
import AppContainer from "@/components/Container/AppContainer";
export default {
  name: "AppHeader",
  components: {AppContainer}
}
</script>
<style scoped>
  header a{
    padding: 6px 16px;
    background-color: white;
    margin: 0 10px;
    border-radius: 4px;
  }
</style>
