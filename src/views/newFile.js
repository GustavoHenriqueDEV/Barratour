export default (await import('vue')).defineComponent({
components: {
ProductsGrid,
InfSection
},
data() {
return {
isScrolled: false,
backgrounds: [
require('../assets/img/casal.jpg'),
// Adicione quantas imagens quiser
],
currentBackgroundIndex: 1
};
},
mounted() {
this.startCarousel();

Window.addEventListener('scroll', this.handleScroll);
},
beforeUnmount() {
window.removeEventListener('scroll', this.handleScroll);
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

},
handleScroll() {
this.isScrolled = window.scrollY > 0;
}
}
});
