<template>
  <div>
    <div class="products-grid">

      <div v-for="card in cards" :key="card.id" class="card" :style="{ backgroundImage: 'url(' + require('@/assets/img/' + card.backgroundImage) + ')' }">
        <h3>{{ card.title }}</h3>
        <p>{{ card.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsGrid',
  data() {
    return {
      cards: [
        { id: 1, title: '', content: 'Conteúdo do Card 1', backgroundImage: 'pesca.jpg' },
        { id: 2, title: '', content: 'Conteúdo do Card 1', backgroundImage: 'ração.jpg' },
        { id: 3, title: '', content: 'Conteúdo do Card 1', backgroundImage: 'churras.jpg' },
        { id: 4, title: '', content: 'Conteúdo do Card 1', backgroundImage: 'carne.jpg' },
        { id: 5, title: '', content: 'Conteúdo do Card 1', backgroundImage: 'guarda-sol.jpg' },
        

        // Adicione mais objetos para mais cards
      ]
    };
  }
};
</script>

<style lang="scss">
.card {
  background-position: 50% 90%;
  background-size: cover;
  height: 300px;
  width: 250px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.products-grid {
  margin-left: 90px;
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
</style>
