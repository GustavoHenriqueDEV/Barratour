<template lang="">
  <div>
    <div class="carrousel" id="carousel">
      <div class="appbar">
        <div class="menu">
            <img src="../assets/img/barratour2.png" alt="">
            <div class="link-menu">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Comerce</a>
                <a href="">Donate</a>  
                <a href="">Contact</a>
            </div>
        </div>
    </div>


      <div class="container">
        
        <h1 class="header tracking-in-expand-fwd-bottom">
          Barra do Sul
          <br>
          Em um só lugar

        </h1>
        <a href="" class="btn  h-button tracking-in-expand-fwd-bottom" @click="scrollToTarget">Descubra os serviços</a>
      </div>
    </div>
  </div>
  <div class="comerce-section">
    <div class="carrousel2">
      <div class="suport-top" :class="{'tracking-in-expand-fwd-bottom2': isScrolled }" >
        <h4>Esse é o seu lugar</h4>
        <h2>Descubra O Melhor Da Cidade</h2>
      <div class="suport-left">
      <div class="suport-wrapper">
        <div id="div" class="suport-column">
          <div class="suport-square">
            <div class="suport-square-text"></div>
            <h3 class="square-text">Hotelaria</h3>
          </div>
        </div>
        <div id="div" class="suport-column">
          <div class="suport-square">
            <div class="suport-square-text1"></div>
            <h3 class="square-text">Turismo</h3>
        
          </div>
        </div>
        <div id="div" class="suport-column">
          <div class="suport-square">
            <div class="suport-square-text2"></div>
            <h3 class="square-text">Restaurantes</h3>
          </div>
        </div>
        <div id="div" class="suport-column">
          <div class="suport-square">
            <div class="suport-square-text3"></div>
            <h3 class="square-text">Bares</h3>
          </div>
        </div>
        
      </div>
      </div>
      </div>
    </div>

    <div class="helper-section">
      <div class="carrousel3">
        <div class="helper-suport-text" >
        <h3 class="helper-text" :class="{'tracking-in-expand-fwd-bottom2': isScrolled }">Tudo que você precisa
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
        <div class="products-grid">
         <ProductsGrid/>
        </div>
        <div class="shop-more">
          <a href="" class="btn dark w-button">Ver todos os produtos</a>
        </div>
      </div>
    </div>


    <div class="carrousel6" >
    <div  id="targetSection" class="inf-text"><h1 class="inf-text">Procurando por um serviço?</h1></div>
      <div class="inf-section">

        <InfSection/>
      </div>
    </div>

   <footer class="footer">
    <div class="container-footer">
        <img src="../assets/img/barratour2.png" alt="">
        <div class="social-media"  >
          <a class="social-media " href="">Insta</a>
          <a class="social-media " href="">Facebook</a>
          <a class="social-media " href="">whatz</a>
        </div>
    </div>
    <div> Made by Gustavo.©2024.</div>
   </footer>

  </div>

</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue.vue'
import InfSection from '../components/InfSection.vue.vue'
export default {
  components:{
    ProductsGrid,
    InfSection

  },
  data() {
    return {
      isScrolled:false,
      backgrounds: [
        require('../assets/img/casal.jpg'),
  
      ],
      currentBackgroundIndex: 1
    };
  },
  mounted() {
    if (typeof window !== 'undefined') {
            window.addEventListener('scroll', this.handleScroll);
        }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', this.handleScroll);
        }
  },
  methods: {
    scrollToTarget(event) {
      event.preventDefault();
      const targetSection = document.getElementById('targetSection');

      if (targetSection) {
        // Opções para o comportamento da rolagem
        const options = {
          top: targetSection.offsetTop,
          behavior: 'smooth', // rolar suavemente
        };

        // Aplica a rolagem suave
        window.scrollTo(options);
      }
    },
     
      handleScroll(){
        this.isScrolled = window.scrollY > 0
      }
  }
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap');


.tracking-in-expand-fwd-bottom {
  opacity: 0; /* Inicialmente, define a opacidade para 0 */
}

.suport-square-text{
  background-image: url("../assets/img/sino.jpg");
  height: 300px;
  width: 300px;
  
  background-position: 50% 90%; 
  background-size: cover;
  
}
.suport-square-text1{
  background-image: url("../assets/img/barco.jpg");
  height: 300px;
  width: 300px;
  background-position: 50% 90%; 
  background-size: cover;
}
.suport-square-text2{
  background-image: url("../assets/img/peixe.jpg");
  height: 300px;
  width: 300px;
  background-position: 50% 90%; 
  background-size: cover;
}
.suport-square-text3{
  background-image: url("../assets/img/cerveja.jpg");
  height: 300px;
  width: 300px;
  background-position: 50% 90%; 
  background-size: cover;
}

.tracking-in-expand-fwd-bottom {
	animation: tracking-in-expand-fwd-bottom 2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

@keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}


.tracking-in-expand-fwd-bottom2 {
  opacity: 0; /* Inicialmente, define a opacidade para 0 */
}


.tracking-in-expand-fwd-bottom2 {
	animation: tracking-in-expand-fwd-bottom 2.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

@keyframes tracking-in-expand-fwd-bottom2 {
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}

.social-media{

  padding: 10px;
}
.container-footer{
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
}

.footer{
  padding-top: 65px;
  padding-bottom: 20px;
  background-color: #222;
  color: aliceblue;
}


.inf-text{
  display: flex;
  justify-content: center;
  color: rgb(240, 235, 235);
  text-transform: uppercase;
  font-size: 30px;
}

.inf-section{
justify-content: center;
display: flex;
background-color: #333;
padding-top: 65px;
padding-bottom: 65px;

}

.shop-more{
  display: flex;
  justify-content: center;
  padding-top: 60px;

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
.h-button{
  font-size: 25px;
  color:#222;
  background-color: white;
  border: 0;
  margin-left: 20px;
  margin-top: 10px;
  line-height: inherit;
  padding-left: 20px;
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
  justify-content: center;
  align-items: center;
  padding-bottom: 35px;


}
.suport-top-left{
  display: flex;
  justify-content: center;
  flex-direction: column;

}
.details-shop{
  font-size: 35px;
  text-transform: uppercase;
}


.products-section{
  padding-top: 65px;
  padding-bottom: 65px;
  background-color: rgb(240, 235, 235);
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

.square-text{

    letter-spacing: 2px;
    font-family: 'Libre Bodoni',Georgia,"Times New Roman",serif;
    font-size: 25px;
    color: #2b2d42!important;
    line-height: 1.5em;
    text-align: center;
}


.suport-square{
  
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  min-height: 350px;
  width: 350px;
  margin-bottom: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgb(240, 235, 235);
  box-shadow: 0px 10px 80px 0px rgba(0,0,0,0.1);
}


h2{
  font-family: 'Libre Bodoni',Georgia,"Times New Roman",serif;
  font-size: 50px;
  color: #2b2d42!important;
  padding-bottom: 100px;
  display: flex;
  letter-spacing: 6px;
  justify-content: center;
}
h4{
    font-family: 'Plus Jakarta Sans',Helvetica,Arial,Lucida,sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 15px;
    color: #c77a63!important;
    letter-spacing: 3px;
    line-height: 1.2em;
    padding-bottom: 20px;
    text-align: center;
}

.suport-wrapper{
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
}
.suport-column{
  min-height: 200px;
}

.carrousel {
  background-image: linear-gradient(10deg, #222, rgba(34, 34, 34, 0)), url(../assets/img/mulher-dancando.jpg);
  background-position: 0px 0px, 30% 30%;
  background-size: auto, cover;
  min-height: 950px;
  padding-right: 15px;
  padding-left: 15px;
}
.carrousel2 {
  min-height: 550px;
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  min-height: 950px;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(240, 235, 235);

}
.carrousel3 {
  min-height: 550px;
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  min-height: 650px;
  padding-right: 15px;
  padding-left: 15px;
  background-image: linear-gradient(400deg, #222, rgba(34, 34, 34, 0)), url(../assets/img/mulher-praia.jpg);
  background-color: rgb(240, 235, 235);

}
.carrousel4{
  min-height: 550px;
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  min-height: 650px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: rgb(240, 235, 235);
}
.carrousel5{
  min-height: 550px;
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  min-height: 650px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: #333

}
.carrousel6{
  min-height: 550px;
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  min-height: 650px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: #333

}
.container {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
.header {
  line-height: 1.0;
  font-family: Sen, sans-serif;
  font-size: 100px;
  color: white;
  margin-right: auto;
  margin-left: auto;
  padding-top: 10rem;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
