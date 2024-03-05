<template lang="">

    <div class="inf-wrapper" >

      <div v-for="card in cards" :key="card.id" class="card" :style="{ backgroundImage: 'url(' + require('@/assets/img/' + card.backgroundImage) + ')' }">

        <h3>{{ card.title }}</h3>
        <p>{{ card.content }}</p>
        

      </div>
   </div> 
</template>
<script>
export default {
    name:"InfSection",
    data() {
      return {
        cards: [
        { id: 1, title: '', content: 'Conteúdo do Card 1', backgroundImage: 'pintor.jpg' },
        { id: 2, title: '', content: 'Conteúdo do Card 1', backgroundImage: 'pedreiro.jpg' },
        { id: 3, title: '', content: 'Conteúdo do Card 1', backgroundImage: 'carro.jpg' },

        ]
      }
    },
}
</script>
<style lang="scss">





.inf-wrapper {
    margin-left: 90px;
    display: flex;
    justify-content: center;
    grid-template-columns: 1fr 1fr 0fr 0fr 0fr ;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    align-items: stretch;
    grid-auto-flow: row
    
  }
    
</style>