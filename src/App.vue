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
/* transitions.css */

/* Classe para a transição de saída (quando a rota atual está saindo) */
.fade-out-enter-active, .fade-out-leave-active {
  transition: opacity 0.5s;
}
.fade-out-enter, .fade-out-leave-to {
  opacity: 0;
}

/* Classe para a transição de entrada (quando a nova rota está entrando) */
.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 0.5s;
}
.fade-in-enter, .fade-in-leave-to {
  opacity: 0;
}
.fade-in-enter-to, .fade-in-leave {
  opacity: 1;
}



</style>
