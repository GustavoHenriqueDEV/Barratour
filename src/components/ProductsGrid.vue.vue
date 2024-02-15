<template lang="">
    <div>
        <div class="products-grid">
            <div class="card">
              <h3>Card 1</h3>
              <p>Conteúdo do Card 1</p>
            </div>
            <!-- Card 2 -->
            <div class="card">
              <h3>Card 2</h3>
              <p>Conteúdo do Card 2</p>
            </div>
            <!-- Card 3 -->  
            <div class="card">
              <h3>Card 6</h3>
              <p>Conteúdo do Card 6</p>
            </div>
            <div class="card">
              <h3>Card 6</h3>
              <p>Conteúdo do Card 6</p>
            </div>
            <div class="card">
              <h3>Card 6</h3>
              <p>Conteúdo do Card 6</p>
            </div>     
            <div class="card">
              <h3>Card 6</h3>
              <p>Conteúdo do Card 6</p>
            </div> 
            <div class="card">
              <h3>Card 6</h3>
              <p>Conteúdo do Card 6</p>
            </div> 
            <div class="card">
              <h3>Card 6</h3>
              <p>Conteúdo do Card 6</p>
            </div> 
            <div class="card">
              <h3>Card 6</h3>
              <p>Conteúdo do Card 6</p>
            </div> 
            <div class="card">
              <h3>Card 6</h3>
              <p>Conteúdo do Card 6</p>
            </div>                             
        </div>
    </div>
</template>
<script>
export default {
    name:'ProductsGrid'
    
}
</script>
<style lang="scss">

.card {
    height: 300px;
    width: 250px;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .products-grid {
    margin-left: 90px;
    display: grid;
    grid-template-columns: 1fr 1fr 0fr 0fr 0fr ;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-items: stretch;
    align-items: stretch;
    grid-auto-flow: row
    
  }

</style>