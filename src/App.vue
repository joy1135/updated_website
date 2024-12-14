<script setup>
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import NewsMain from './components/NewsMain.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <NavBar></NavBar>
  <NewsMain></NewsMain>
  <Footer></Footer>
</template>

<style>



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
