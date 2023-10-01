<template>
        <nav class=" text-center m-5 text-3xl">
            <router-link to="/home">Personajes </router-link>
            <router-link to="/location">Ubicación</router-link>

        </nav>
        
        <hr class=" border-1 border-green">
        <div class="grid grid-cols-4 gap-5 p-10">
            
            <section v-for="value in character " class="">

                <div class="content-center border-2 border-green p-10 ">

                    <div class=" flex justify-center">
                        <img class="  h-[250px] w-[250px] " :src=" `${value.image }`" alt="">
                    </div>
                    <hr  class="border-1 border-green m-2">
                    <h2 class=" text-center text-green">{{ value.name }}</h2>
    
                </div>

            </section>

        </div>
    

<!-- {{ character }} -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
    getCharacter()
})

const character = ref(null)
const getCharacter = async()=>{
    await axios.get('https://rickandmortyapi.com/api/character')
        .then((resolve)=>{
            console.log(resolve.data.results)
            character.value = resolve.data.results
        }).catch((eror)=>{
            console.log(eror);
        })
}


</script>

<style>
</style>