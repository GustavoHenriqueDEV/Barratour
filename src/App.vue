<!-- App.vue -->
<template>
  <div>
    <GlobalNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import GlobalNavbar from './components/GlobalNavbar.vue';

export default {
  name: 'App',
  components: {
    GlobalNavbar
  }
};
</script>

<style>

*{
  margin: 0px;
  font-family: Sen, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}



</style>
