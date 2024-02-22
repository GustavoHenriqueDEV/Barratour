<template>
    <div class="hotel-container">

      <div class="city-hotel-grid">


        <div class="best-card">
            <span class="img-wrapper">
                <img  class="img-content" src="../assets/img/sino.jpg" alt="">
            </span>
            <div class="price-wrapper">
                <div class="price-content">
                    <p>80/Dia</p>
                </div>
            </div>
        </div>
        <div class="best-card">
            <span class="img-wrapper">
                <img class="img-content" src="../assets/img/sino.jpg" alt="">
            </span>
        </div>
        <div class="best-card">
            <span class="img-wrapper">
                <img class="img-content" src="../assets/img/sino.jpg" alt="">
            </span>
        </div>
        <div class="best-card">
            <span class="img-wrapper">
                <img class="img-content" src="../assets/img/sino.jpg" alt="">
            </span>
        </div>



      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductsGrid',
    data() {
      return {
      
      };
    }
  };
  </script>
  
  <style lang="scss">


  .img-content{
    width: 510px;
    height: 250px;
  }

.img-wrapper{
    position: relative;
    display: flex;
    justify-content: center;
}




  .best-card {
    background-position: 50% 90%;
    background-size: cover;
    height: 400px;
    width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0px;
  }
  
  .city-hotel-grid {
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    justify-items: stretch;
    align-items: stretch;
  }
  p{
    
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background-color: white;
  }
  .hotel-container{
    height: 100vh;
    justify-content: center;
    display: flex;
  }
  </style>
  