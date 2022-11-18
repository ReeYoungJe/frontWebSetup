<template>
  <Header/>
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header

  }
}
</script>

<style lang="scss">
 @import "assets/style.scss";
</style>
