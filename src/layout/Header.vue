<template>

  <header class="c-header">

    <div class="c-header__wrap">

      <div class="c-header__theme">
        <div @click="change">클릭하면 body 색상변경</div>
      </div>

      <div class="c-header__logo">
        <h1>
          <router-link to="/">LOGO</router-link>
        </h1>
      </div>

      <div class="c-header__gnb">
        <ul>
          <li>
            <router-link to="/sub">메뉴</router-link>
          </li>
          <li>
            <router-link to="/">메뉴</router-link>
          </li>
          <li>
            <router-link to="/">메뉴</router-link>
          </li>
          <li>
            <router-link to="/">메뉴</router-link>
          </li>
          <li>
            <router-link to="/">메뉴</router-link>
          </li>
          <li>
            <router-link to="/">메뉴</router-link>
          </li>
          <li>
            <router-link to="/">메뉴</router-link>
          </li>
          <li>
            <router-link to="/">메뉴</router-link>
          </li>
        </ul>
      </div>

    </div>

  </header>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      bodyColor: '',
    }
  },
  methods: {
    change() {
      this.$emit('theme', this.bodyColor)
      this.bodyColor = !this.bodyColor
    }
  }

};
</script>
<style>
</style>