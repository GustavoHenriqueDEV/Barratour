<template>
    <div class="section1">
      <div class="header-hotel">Hotel Choises</div>
      <div class="stars">
      <img  class="star-img" src="../assets/img/rating_992001.png" alt="">
      </div>
      <div class="second-header-hotel">Best Of City</div>
    </div>
      <div class="city-hotel-grid">
        <div class="best-card">
          <span class="img-wrapper">
              <img class="img-content" src="../assets/img/sino.jpg" alt="">
          </span>
          <div class="price-wrapper">
            <div class="price-content">
                <p>80/Dia</p>
            </div>
        </div>
        <div class="name-wrapper">
          <p class="name-wrapper">
            Bandeirantes
          </p>
        </div>
        <div class="inf-hotel-wrapper">
          <p class="inf-hotel-wrapper">
            Lorem ipsum dolor sit amet. Aqwdqwdasdas
          </p>
        </div>
        <div class="btn-wrapper">
          <a href="" class="">
            <button @click.prevent="navigateToShowMoreHotel()"  class="btn-see-more">VEJA MAIS</button>
          </a>
        </div>
      </div>
      <div class="best-card">
        <span class="img-wrapper">
            <img class="img-content" src="../assets/img/sino.jpg" alt="">
        </span>
        <div class="price-wrapper">
          <div class="price-content">
              <p>80/Dia</p>
          </div>
      </div>
      <div class="name-wrapper">
        <p class="name-wrapper">
          Bandeirantes
        </p>
      </div>
      <div class="inf-hotel-wrapper">
        <p class="inf-hotel-wrapper">
          Lorem ipsum dolor sit amet. Aqwdqwdasdas
        </p>
      </div>
      <div class="btn-wrapper">
        <a href="" class="">
          <button class="btn-see-more">VEJA MAIS</button>
        </a>
      </div>
    </div>
    <div class="best-card">
      <span class="img-wrapper">
          <img class="img-content" src="../assets/img/sino.jpg" alt="">
      </span>
      <div class="price-wrapper">
        <div class="price-content">
            <p>80/Dia</p>
        </div>
    </div>
    <div class="name-wrapper">
      <p class="name-wrapper">
        Bandeirantes
      </p>
    </div>
    <div class="inf-hotel-wrapper">
      <p class="inf-hotel-wrapper">
        Lorem ipsum dolor sit amet. Aqwdqwdasdas
      </p>
    </div>
    <div class="btn-wrapper">
      <a href="" class="">
        <button class="btn-see-more">VEJA MAIS</button>
      </a>
    </div>
  </div>
        <div class="best-card">
            <span class="img-wrapper">
                <img  class="img-content" src="../assets/img/sino.jpg" alt="">
            </span>
            <div class="price-wrapper">
                <div class="price-content">
                    <p>80/Dia</p>
                </div>
            </div>
            <div class="name-wrapper">
              <p class="name-wrapper">
                Bandeirantes
              </p>
            </div>
            <div class="inf-hotel-wrapper">
        
            </div>
            <div class="btn-wrapper">
              <a href="" class="">
                <button class="btn-see-more">VEJA MAIS</button>
              </a>
            </div>
        </div>
        <div class="best-card">
            <span class="img-wrapper">
                <img class="img-content" src="../assets/img/sino.jpg" alt="">
            </span>
            <div class="price-wrapper">
              <div class="price-content">
                  <p>80/Dia</p>
              </div>
          </div>
          <div class="name-wrapper">
            <p class="name-wrapper">
              Bandeirantes
            </p>
          </div>
          <div class="inf-hotel-wrapper">
            <p class="inf-hotel-wrapper">
              Lorem ipsum dolor sit amet. Aqwdqwdasdas
            </p>
          </div>
          <div class="btn-wrapper">
            <a href="" class="">
              <button class="btn-see-more">VEJA MAIS</button>
            </a>
          </div>
        </div>
        <div class="best-card more-element">
            <span class="img-wrapper">
                <img class="img-content" src="../assets/img/sino.jpg" alt="">
            </span>
            <div class="price-wrapper">
              <div class="price-content">
                  <p>80/Dia</p>
              </div>
          </div>
          <div class="name-wrapper">
            <p class="name-wrapper">
              Bandeirantes
            </p>
          </div>
          <div class="inf-hotel-wrapper">
            <p class="inf-hotel-wrapper">
              Lorem ipsum dolor sit amet. Aqwdqwdasdas
            </p>
          </div>
          <div class="btn-wrapper">
            <a href="" class="">
              <button class="btn-see-more">VEJA MAIS</button>
            </a>
          </div>
        </div>
        <div id="more" class=" more-element best-card">
            <span class="img-wrapper">
                <img class="img-content" src="../assets/img/sino.jpg" alt="">
            </span>
            <div class="price-wrapper">
              <div class="price-content">
                  <p>80/Dia</p>
              </div>
          </div>
          <div class="name-wrapper">
            <p class="name-wrapper">
              Bandeirantes
            </p>
          </div>
          <div class="inf-hotel-wrapper">
            <p class="inf-hotel-wrapper">
              Lorem ipsum dolor sit amet. Aqwdqwdasdas
            </p>
          </div>
          
          <div class="btn-wrapper">
            <a href="" class="">
              <button class="btn-see-more">VEJA MAIS</button>
            </a>
          </div>
          
        </div>



      </div>

    <div class="show-more-hotel">
      <a @click.prevent="toggleMore()" href="" class="btn-hotel">Ver todos</a>
    </div>
    <div class="lastSection"></div>
  </template>
  
  <script>
  export default {
    name: 'ProductsGrid',
    data() {
      return {
        showMore : false,

      
      };
    },
    methods: {
    toggleMore(event) {
      if (event) {
        event.preventDefault();
      }

      this.showMore = !this.showMore; 
      const moreElements = document.querySelectorAll('.more-element');

      moreElements.forEach(element => {
        element.style.display = this.showMore ? 'none' : 'flex';
      });
    },
    navigateToShowMoreHotel(){
        this.$router.push({name:'ShowMoreHotel'})
      }



  },
};
  </script>
  
  <style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap');





@media only screen and (max-width: 768px) {
  .city-hotel-grid{
    display: flex;
    flex-direction: column !important;
  }
  .header-hotel{
    font-size: 40px !important;
  }
  .star-img{
    max-width: 40px !important;
  }
  .second-header-hotel{
    font-size: 11px !important;
  }
  .best-card{
    width: 300px !important;
    margin-left: 40px;
    height: 510px !important;
    
  }
  .price-wrapper{
    width: 200px !important;
  }
  .inf-hotel-wrapper {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

}
.more-element{
  display: none ;
}



.show-more-hotel{
  
    display: flex;
    justify-content: center;
    padding-top: 60px;
    padding-bottom: 20px;
  
}
.stars{
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
}

.star-img{
  display: flex;
  align-items: center;
  max-width: 50px;
}
.btn-hotel {
  border-color: #222;
  background-color: #222;
}
.btn-hotel {
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
}
.btn-hotel {
  padding: 5px 25px;
  border-style: solid;
  border-width: 1px;
  border-color: #eb5757;
  background-color: #eb5757;
  border-radius: 5px;
  font-weight: 700;
}

.section1{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.second-header-hotel{
  font-family: 'Plus Jakarta Sans',Helvetica,Arial,Lucida,sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 15px;
    color: #c77a63!important;
    letter-spacing: 3px;
    line-height: 1.2em;
    text-align: center;
}

.lastSection{
  height: 20vh;
  width: 100%;
  background-color: #faf5f2!important;
}

.header-hotel{
  font-family: 'Libre Bodoni',Georgia,"Times New Roman",serif;
  font-size: 50px;
  color: #2b2d42!important;
  line-height: 1.2em;
  text-align: center;
}

.section1{
  height:20vh;
  width: 100%;
  background-color: #faf5f2;
}

  .img-content {
    width: 404px;
    height: 246px;
  }

  .img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .btn-wrapper{
    display: flex;
    justify-content: center;
  }

  .best-card {
    position: relative; /* Adicionando posição relativa ao contêiner pai */
    max-width: 1290px;
    background-position: 50% 90%;
    background-size: cover;
    height: 600px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 1px 20px 16px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 0px;
  }

  .price-wrapper {
    position: absolute; /* Adicionando posição absoluta para sobrepor */
    left: 50%; /* Posicionando no centro horizontalmente */
    transform: translateX(-50%); /* Corrigindo para centralizar completamente */
    line-height: 1.6em;
    font-family: 'Plus Jakarta Sans', Helvetica, Arial, Lucida, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.6em;
    background-color: #FFFFFF;
    border-radius: 30px;
    overflow: hidden;
    margin-top: 220px;
    width: 300px;
    padding: 17px 20px 18px; /* Simplificando as propriedades de preenchimento */
    box-shadow: 0px 5px 80px 0px rgba(0, 0, 0, 0.15);
  }

  .city-hotel-grid {
    justify-content: center;
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    justify-items: stretch;
    align-items: stretch;
    flex-wrap: wrap;
  }

  p {
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background-color: white;
    overflow-wrap:break-word
  }

  .hotel-container {
    height: 60vh;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .price-content{
    font-size: 16px;
    color:#6e6e6e
  }
.name-wrapper{
  margin-top: 25px;
  font-family: 'Libre Bodoni', Helvetica, Arial, Lucida, sans-serif;
  font-weight: 600;
  font-size: 27px;
  line-height: 1.6em;
  color: #2b2d42;
}
.inf-hotel-wrapper{
  color:#6e6e6e;
  font-family: 'Plus Jakarta Sans',Helvetica,Arial,Lucida,sans-serif;
}

.btn-see-more{
  height: 60px;
  width: 168px;
  font-size: 20px;
  font-weight: 500;
  padding: 0.3em 1em;
  line-height: 1.7em!important;
  border-width: 1px !important;
  border-radius: 3px;
  background-color: transparent;
  transition-duration: .2s;
  transition-property: all!important;
  transition: background-color 0.3s ease;
  border-color: #e5e5e556;
  border-top-color: rgba(229, 229, 229, 0.411);
  border-right-color: rgba(229, 229, 229, 0.322);
  border-bottom-color: rgba(229, 229, 229, 0.288);
  letter-spacing: 1px;
  font-size: 15px;
  font-family: 'Plus Jakarta Sans',Helvetica,Arial,Lucida,sans-serif!important;
  font-weight: 600!important;
  text-transform: uppercase!important;
  margin-top: 50px;
  margin-left: 10px;
      
}
.btn-see-more:hover{
  border-color: transparent;
  background-color: #c77a63
}




</style>

  