<template>
  <div>
    <carousel :perPageCustom="[[0, 1], [768, 2], [1024, 3], [1200, 4]]">
      <slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Imagem do Carrossel">
      </slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from 'vue-carousel';

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      images: [
        'url_da_imagem_1.jpg',
        'url_da_imagem_2.jpg',
        'url_da_imagem_3.jpg',
        // Adicione mais URLs de imagens conforme necessário
      ],
    };
  },
};
</script>

<style scoped>
/* Adapte os estilos conforme necessário */
img {
  width: 100%;
  height: auto;
}
</style>
