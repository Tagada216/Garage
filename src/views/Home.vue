<template>
  <div id="app">
      <h1 class="font-semibold text-3xl text-center mt-6">{{garageName}} </h1>
			<p class="text-center mt-6 ">
				{{$store.state.annee}}
				{{annee}}
				Bienvenue dans au {{garageName}} ! 				
				Apple pie jelly beans chupa chups topping gingerbread marzipan. Jelly cake tootsie roll chocolate cake danish biscuit.
				Cupcake cake apple pie ice cream donut sweet roll candy. Pudding oat cake topping. 
				Pudding wafer cake ice cream jujubes marzipan cake. Pie macaroon pastry jelly-o jelly candy. 
			</p>
			<section >
				<h2 class="text-center mt-6 text-3xl ">Articles</h2>
				<div  v-for=" article in simpleArticles " :key="article.name">
          <ArticlesItem  
          v-bind:name="article.name" 
          :image="article.image"
          :quantity="article.quantity"
          :inStock="article.inStock"
          :addToShoppingCart="addToShoppingCart"
          />
				</div>
			</section>

			<aside class="text-center mt-6 text-2xl">
				<h2>Panier d'achat: {{shoppingCart}} articles</h2>
			</aside>

			<div v-for="element in maMargarita" :key="element.idDrink">
				<p>{{element.name}}</p>
			</div>
         
			<footer class="text-center mt-8">
				<p>{{footerCopyright}}</p>
			</footer>
  </div>
</template>

<script>
import axios from 'axios';
import ArticlesItem from '../components/ArticlesItem.vue';
import {mapState} from 'vuex';
export default {
  name: 'App',
  components: {
    ArticlesItem
  },

  mounted() { 
	console.log('Je suis monté sur le DOM!'),
	this.getMargarita()
  },
 
  data(){
    return{
					maMargarita: null,
					garageName :"Garage Durant",
					shoppingCart: 0,
					simpleArticles: [
						{
							name: "Freins Céramique",
							image: {
								source: "https://www.piecesauto-pro.fr/magazine/wp-content/uploads/2020/01/Keramische-Bremsbel%C3%A4ge-1.jpg",
								alt: "Des freins céramique"
							},
							inStock: true,
							quantity: 1
						},
						{
							name: "Essuis Glace Bosh",
							image: {
								source: "https://media.centrakor.com/catalog/product/cache/image/800x800/0ee134d6d987b4a4dd752d2524c88dff/b/a/balai-essuie-glace-12-pouces-30cm-247535_247535_DEB_WEB.JPG",
								alt: "Essuis Glace Bosh"
							},
							inStock: true,
							quantity: 1
						},
						{
							name: "Huile Moteur",
							image: {
								source: "https://www.oreca-store.com/blog/wp-content/uploads/2019/05/20952739_l-1288x724.jpg",
								alt: "Huile Moteur"
							},
							inStock: false,
							quantity: 1
						}
					]
    }
				},
                computed:{
                    footerCopyright(){
                        const currentYear = new Date().getFullYear();

                        return `Copyright ${this.garageName} ${currentYear}`
                    },
					...mapState(
						['annee'])
                },
				methods:{
					addToShoppingCart(amount){
						this.shoppingCart += amount
					},
					getMargarita(){

						axios
							.get('https://swapi.dev/api/starships' )
							.then(response =>{
								this.maMargarita = response.data.results
								console.log(this.maMargarita)
							} )
							.catch(error => console.log(error))
					}
				}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
