<template>
    <nav class="text-center m-5 text-3xl">
        <router-link to="/home" >Personajes </router-link>
        <router-link to="/location">Ubicación</router-link>
    </nav>
    
    <hr class=" border-1 border-green">
    <div class="grid grid-cols-4 gap-5 p-10">
            
            <section v-for="value in location " class="">

                <div class=" w-80 h-60 content-center border-2 border-green p-10 ">

                    <h1 class="text-center text-xl text-green">{{ value.name }}</h1>

                    <p> <b>Tipo:</b> {{ value.type }} </p>
                    <p> <b>Dimensiones:</b>{{ value.dimension }}</p>
    
                </div>

            </section>

        </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
    getLocation()
})

const location = ref(null)

const getLocation = async()=>{
    await axios.get('https://rickandmortyapi.com/api/location')
        .then((resolve)=>{
            console.log(resolve.data.results)
            location.value = resolve.data.results
        }).catch((eror)=>{
            console.log(eror);
        })
}

</script>

<style>

</style>