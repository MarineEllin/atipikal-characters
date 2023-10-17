<script setup lang="ts">
    import {reactive, ref} from "vue";
    import CharacterCard from "./CharacterCard.vue";
    import { type CharacterObject } from '@/models/character.model';
    import { fetchCharacters } from '@/api/getCharacters';
    import { useCharactersStore, useCounterStore } from "@/stores/characters";
    import { fetchMoreCharacters } from "@/api/getMoreCharacters";
    import Loading from "../components/Loading.vue";
    import {Constants} from "../constants/constants";
    const {data} = await fetchCharacters();
    const charactersData: CharacterObject[] = data.results;
    const charactersStore = useCharactersStore();
    charactersStore.characters.push(...charactersData);
    const characters = reactive(charactersStore.charactersList);
    const counterStore = useCounterStore();
    const isLoadingMore = ref(false);
    const loadMoreCharacters = async() => {
        isLoadingMore.value = true;
        const {data} = await fetchMoreCharacters(counterStore.count, Constants.INITIAL_NUMBER_OF_CHARACTERS);
        const moreCharacters = data.results;
        counterStore.setCounter(counterStore.count + Constants.INITIAL_NUMBER_OF_CHARACTERS);
        charactersStore.characters.push(...moreCharacters);
        isLoadingMore.value=false;
    }

</script>

<template>
    <div class="homepageContainer">
        <ul class="cardsContainer">
            <li v-for="character in characters" :key="character.id">
                <CharacterCard :character="character"/>
            </li>
        </ul>
        <div class="loadMoreContainer">
            <button @click="loadMoreCharacters" class="btn">Load More</button>
        <div v-if="isLoadingMore" class="loadingComponent"><Loading/></div>
        </div>
    </div>
    
</template>
   
       
<style lang="scss" scoped>

@use "../assets/mixins.scss" as mixin;
.homepageContainer {
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
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

    .loadMoreContainer {
        position: relative;
        .loadingComponent {
            position: absolute;
            top: -30px;
            right: 10px;
        }
    }
}
</style>