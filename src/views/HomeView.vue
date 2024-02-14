<template lang="">

  <div>
    <div class="carrousel" id="carousel">
      <div class="container">
        <h1 class="header">
          Barra do Sul
          <br>
          Em um só lugar
        </h1>
      </div>
    </div>
  </div>
  <div class="comerce-section">
    <div class="carrousel2">
      <div class="suport-top">
        <h2>Comercios varejistas</h2>
      <div class="suport-left">
      <div class="suport-wrapper">
        <div id="div" class="suport-column">
          <div class="suport-square">
            <div class="suport-square-text">Nome-do-comercio</div>
          </div>
        </div>
        <div id="div" class="suport-column">
          <div class="suport-square">
            <div class="suport-square-text">Nome-do-comercio</div>
          </div>
        </div>
        <div id="div" class="suport-column">
          <div class="suport-square">
            <div class="suport-square-text">Nome-do-comercio</div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>

    <div class="helper-section">
      <div class="carrousel3">
        <div class="helper-suport-text">
        <h3 class="helper-text">Tudo que você precisa
          <br>
          Em um só lugar
        </h3>
        </div>
        <div class="helper-suport-text-right">
          <h3 class="helper-text-right">A sua cidade na sua mão</h3>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  data() {
    return {
      backgrounds: [
        require('../assets/img/teste.jpg'),
  
        // Adicione quantas imagens quiser
      ],
      currentBackgroundIndex: 1
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.changeBackground();
      }, 222000); // Mude para o intervalo desejado em milissegundos (5 segundos neste exemplo)
    },
    changeBackground() {
  const carousel = document.getElementById('carousel');
  this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgrounds.length;
  carousel.style.backgroundImage = `linear-gradient(400deg, #222, rgba(34, 34, 34, 0)), url(${this.backgrounds[this.currentBackgroundIndex]})`;
}
  }
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap');


.helper-suport-text{
  display: flex;
  justify-content: start;
}
.helper-suport-text-right{
  display: flex;
  justify-content: end;
}



.suport-square{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #09d457;
  display: flex;
    overflow: hidden;
    min-height: 350px;
    margin-bottom: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #222;
}
.helper-text{
  color: rgb(240, 235, 235);
  font-size: 45px;
  margin-top: 15rem;
  margin-left: 4rem;
  line-height: 65px;
}
.helper-text-right{
  color: rgb(240, 235, 235);
  font-size: 45px;
  margin-left: 4rem;
  line-height: 65px;
}





h2{
  padding-top: 20px;
  color: #333;
  padding-bottom: 20px;
  font-size: 60px;
  line-height: 1.2;
  display: flex;
  letter-spacing: 5px;
  justify-content: center;
}

.suport-wrapper{
    display: flex;
    justify-content: space-between;
}
.suport-column{
  width: 30%;
  min-height: 200px;
}

.carrousel {
  min-height: 550px;
  background-image: linear-gradient(400deg, #222, rgba(34, 34, 34, 0)), url(../assets/img/paisagem.jpg);
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  min-height: 650px;
  padding-right: 15px;
  padding-left: 15px;
}
.carrousel2 {
  min-height: 550px;
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  min-height: 650px;
  padding-right: 15px;
  padding-left: 15px;
}
.carrousel3 {
  min-height: 550px;
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  min-height: 650px;
  padding-right: 15px;
  padding-left: 15px;
  background-image: linear-gradient(400deg, #222, rgba(34, 34, 34, 0)), url(../assets/img/mulher-praia.jpg);
  background-color: #333;
}

.container {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.header {
  line-height: 1.2;
  font-family: Sen, sans-serif;
  font-size: 70px;
  color: white;
  margin-right: auto;
  margin-left: auto;
  padding-top: 10rem;
  padding-right: 15px;
  padding-left: 15px;
}

</style>
