<template>
  <div  :class="[bodyColor === true ? 'light body': 'dark body']">
    <Header :bodyColor="bodyColor" @theme="theme"/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </div>

</template>

<script>
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default {
  name: 'App',
  data(){
    return{
      bodyColor : true,
      monColor : '',
    }
  },
  components: {
    Footer,
    Header
  },
  methods:{
    theme(bodyColor){
      this.bodyColor = bodyColor;
      console.log('app 에서 콘솔뜸 ',bodyColor)
      /*  if (bodyColor == false){
         this.bodyColor = 'light'
       }else {
         this.bodyColor = 'dark'
       }*/

      /*bodyColor === true ? 'light body': 'dark body'*/

    }
  }
}
</script>

<style lang="scss">
 @import "assets/style.scss";
</style>
