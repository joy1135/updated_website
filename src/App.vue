<script setup>
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
 
    <Header></Header>
    <NavBar></NavBar>
    <RouterView></RouterView>    
    <Footer></Footer>
 
</template>

<style>

#app {
  height: 100vh;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px;
}

@media screen and (max-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media screen and (max-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media screen and (max-width: 576px) {
  .container {
    max-width: 576px;
  }
}
@media screen and (max-width: 320px) {
  .container {
    max-width: 400px;
  }
}

</style>
