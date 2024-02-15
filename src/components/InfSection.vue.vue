<template lang="">

    <div class="inf-wrapper" >

    <div class="inf-card">
        <p>Conteúdo do Card 1</p>
      </div>
      <div class="inf-card">
        <p>Conteúdo do Card 1</p>
      </div>
      <div class="inf-card">
        <p>Conteúdo do Card 1</p>
      </div>
      <div class="inf-card">
        <p>Conteúdo do Card 1</p>
      </div>
      <div class="inf-card">
        <p>Conteúdo do Card 1</p>
      </div>   
   </div> 
</template>
<script>
export default {
    name:"InfSection"
}
</script>
<style lang="scss">




.inf-card{
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background-color: rgb(236, 231, 231);
    height: 200px;
    width: 200px;
}

.inf-wrapper {
    margin-left: 90px;
    display: grid;
    grid-template-columns: 1fr 1fr 0fr 0fr 0fr ;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    align-items: stretch;
    grid-auto-flow: row
    
  }
    
</style>