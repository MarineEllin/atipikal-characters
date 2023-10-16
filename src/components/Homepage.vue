<script setup lang="ts">
    import {reactive} from "vue";
    import CharacterCard from "./CharacterCard.vue";
    import { type CharacterObject } from '@/models/character.model';
    import { fetchCharacters } from '@/api/characters';
    const {data} = await fetchCharacters();
    console.log(data);
    const characters: CharacterObject[] = reactive(data.results.filter((character: CharacterObject) => !character.thumbnail.path.endsWith("image_not_available")));
   

</script>

<template>
    <Suspense>
        <div class="homepageContainer">
        <ul class="cardsContainer">
            <li v-for="character in characters" :key="character.id">
                <CharacterCard :character="character"/>
            </li>
        </ul>
    </div>
    </Suspense>  
</template>
    
    
    
<style lang="scss" scoped>

@use "../assets/mixins.scss" as mixin;
.homepageContainer {
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;

    .cardsContainer {
       display: grid;
       grid-template-columns: repeat(5, 200px);
       gap: 10px;

       @include mixin.xl {
            grid-template-columns: repeat(4, 200px);
       }
       @include mixin.large {
            grid-template-columns: repeat(3, 200px);
       }
       @include mixin.xs-medium {
            grid-template-columns: repeat(2, 200px);
       }
       @include mixin.xs {
            grid-template-columns: repeat(1, 200px);
       }
    }
}
</style>