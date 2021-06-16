<template>
    <div>
           <h2 class="text-center mt-6 text-2xl" >Contactez nous</h2>
			<p class="text-center mt-2 ">Adresse : {{address}} </p>
			<p class="text-center mt-2 ">Téléphone : {{phone}}</p>
			<p class="text-center mt-2 ">Email : {{email}}</p>
			<p class="text-center mt-4 text-xl">Horaires :</p>
			<ul class="text-center mt-4 ">
				<li>L-V: 08:00 à 19:00</li>
				<li>Samedi: 09:00 à 19:00</li>
			</ul>
			{{$store.state.annee}}
    </div>
</template>
<script>
export default {
    data(){
    return{

                  address: "18 avenue de la roue, Lille, France",
					email: "hello@garagedurant.fr",
					phone: "01 59 59 59 59",
    }}
}
</script>
