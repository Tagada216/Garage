<template>
<div>
    <img
        width="300"
        height="150"
		:src="image.source"
        v-bind:alt="image.alt"
	/>
	<div class="mt-8  ml-8">
        <h3>{{name}}</h3>
		<p v-if="inStock">En stock</p>
        <p v-else>En rupture de stock</p>
		<div class="flex flex-col items-center mt-6 ">
			<label for="add-item-quantity">Quantité : {{quantity}}</label>
			<input v-model.number="quantity" id="add-item-quantity" type="number" class="border-2 border-blue-200 rounded"/>
			<v-btn color="primary" elevation="2" rounded  @click="addToShoppingCart(quantity)"  >Ajouter au panier d'achat</v-btn>

        </div>
	</div>
</div>
</template>
<script>
export default {
name:'ArticlesItem',
props:["name", "image", "quantity", "inStock", "addToShoppingCart"]
}
</script>

<style>

</style>