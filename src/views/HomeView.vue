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
      </div>
    </div>

    <div class="products-section">

      <div class="carrousel4">
        <div class="shop-text-wraper">
          <div class="suport-top-left">
            <div class="details-shop">Produtos Disponiveis em comercios locais</div>
          </div>
        </div>

        <div class="products-list-wraper">
          <div class="products-list">
            <div role="listitem">

              <div class="shop-item-wrapper">
                <a href="">
                  <div class="shop-image tumbler-1"></div>
                  <div class="shop-details-item">
                    <div class="shop-details-left">
                      <div class="shop-item-name">
                        teste
                      </div>
                    </div>
                  </div>
                </a>
                <div class="shop-button">
                  <a href="" class="btn w-button">detalhes</a>
                </div>
              </div>
            </div>
          </div>
        </div>  
        <div class="shop-more">
          <a href="" class="btn dark w-button">Ver todos os produtos</a>
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
        require('../assets/img/casal.jpg'),
  
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


.shop-more{
  display: flex;
  justify-content: center;

}
.btn.dark{
  border-color: #222;
  background-color: #222;
}

.btn{
  padding: 5px 25px;
  border-style: solid;
  border-width: 1px;
  border-color: #eb5757;
  background-color: #eb5757;
  border-radius: 5px;
  font-weight: 700;
}
.w-button{
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
}

.shop-button{
  display: flex;
  justify-content: center;
}

.shop-details-left{
  width: 100%;
}
.shop-item-name{
  color: #222;
  font-size: 20px;
  font-weight: 400;
  text-align: center;;
}

.shop-details-item{
  display: flex;
  justify-content: space-between;
}

.shop-image .tumbler-1{
  background-color: black;
  background-position: 50% 50%;
  background-size: cover;
}
.shop-image .tumbler-1{
position: relative;
margin-bottom: 15px;

}
.shop-image{
  min-height: 500px;
  border-radius: 5px;

}


.shop-item-wrapper{
  width: 100%;
  margin-bottom: 40px;
}

.products-list{
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap:16px;
  grid-template-columns:1fr 1fr 1fr ;
  grid-template-rows: auto auto;
}


.shop-text-wraper{
  display: flex;
  mix-blend-mode: 40px;
  justify-content: space-between;
  align-items: center;
}
.suport-top-left{
  display: flex;
  flex-direction: column;

}
.details-shop{
  text-transform: uppercase;
}


.products-section{
  padding-top: 65px;
  padding-bottom: 65px
}


.helper-suport-text{
  display: flex;
  justify-content: start;
}

.helper-text{
  font-family: Sen, sans-serif;
  color: rgb(240, 235, 235);
  font-size: 45px;
  margin-top: 15rem;
  margin-left: 4rem;
  line-height: 65px;
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
  background-image: linear-gradient(400deg, #222, rgba(34, 34, 34, 0)), url(../assets/img/mulher-dancando.jpg);
  background-position: 0px 0px, 30% 30%;
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
.carrousel4{
  min-height: 550px;
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  min-height: 650px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: white;

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
