<script setup lang="ts">
import { useRoute } from 'vue-router';
import {computed, reactive} from "vue";
import { useCharactersStore } from '@/stores/characters';
import type { CharacterObject } from '@/models/character.model';
import { fetchCharacterById } from '@/api/characterDetails';

const route = useRoute();
const charactersStore = useCharactersStore();
const characterIdString = route.params.characterId.toString();
const getCharacter = charactersStore.getCharacterById;
const characterFromStore = getCharacter(characterIdString);

let character: CharacterObject;

if(characterFromStore) {
    character = reactive(characterFromStore);
} else {
    const {data} = await fetchCharacterById(characterIdString);
    character = reactive(data.results[0]);
}

const backgroundImageFormat = "/landscape_incredible.";
const imageFormat = "/portrait_incredible."

const backgroundStyle = computed(() => {
  if (character && character.thumbnail) {
    return {
      'background-image': 'url(' + character.thumbnail.path + backgroundImageFormat + character.thumbnail.extension + ')'
    };
  } else {
    return {};
  }
});

const imagePath = computed(() => {
    if (character && character.thumbnail) {
    return character.thumbnail.path + imageFormat + character.thumbnail.extension;
  } else {
    return {};
  }
})

</script>

<template>
   <div class="detailsContainer" v-if="character" :style="backgroundStyle">
    <router-link to="/">
        <i class="fa-solid fa-circle-xmark"/>
    </router-link>
    
    <div class="detailsContent">
        
        <div class="imageContainer">
           <img :src="imagePath" :alt="character.name" v-if="imagePath">
           <div v-else>Loading</div> 
        </div>
        <div class="details">
            <h2>{{ character.name }}</h2>
            <p class="description">{{ character.description }}</p>
            <div class="listContainer">
                <h3 v-if="character.series.items && character.series.items.length > 0">Series:</h3>
                  <ul>
                    <li v-for="(item, index) in character.series" :key="index">
                        <li v-for="elem in item" :key="elem.name"> {{elem.name}}</li>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    </div>
</template>

<style lang="scss" scoped>
@use "../assets//mixins.scss" as mixin;
    .detailsContainer {
        position: relative;
        display: flex;
        flex: 1;
        background-repeat: no-repeat;
        background-size: cover;
        @include mixin.xs-medium {
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        i {
                cursor: pointer;
                z-index: 2;
                position: absolute;
                top: 20px;
                right: 20px;
                font-size: 24px;
                color: var(--primary);
                transition: all 0.5s;
                &:hover {
                    transform: rotate(360deg);
                }
            }
        &:after {
            position: absolute;
            content: "";
            background-color: var(--secondary);
            opacity: 0.8;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .detailsContent {
            z-index: 2;
            margin: 50px;
            display: flex;
            align-items: center;
            gap: 50px;
            @include mixin.xs-medium {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
            }
            .imageContainer {
                width: 400px;
                height: 600px;
                flex: 0 0 auto;
                @include mixin.large {
                        width: 300px;
                        height: 450px;
                    }
                @include mixin.xs-medium {
                        width: 220px;
                        height: 220px;
                    }
                    
                img {
                    width: 400px;
                    height: 600px;
                    object-fit: cover;
                    border-radius: var(--border-radius);
                    @include mixin.large {
                        width: 300px;
                        height: 450px;
                    }
                    @include mixin.xs-medium {
                        width: 220px;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }
            .details {
                max-width: 600px;
                display: flex;
                flex-direction: column;
                gap:20px;
                @include mixin.xs-medium {
                        gap:10px;
                    }
                h2 {
                    font-size: 32px;
                    color: var(--primary);
                    @include mixin.xs-medium {
                        font-size: 24px;
                    }
                }
                .description {
                    color: var(--white);
                }
                .listContainer {
                    display: flex;
                    gap: 20px;
                    @include mixin.xs-medium {
                        flex-direction: column;
                        gap: 10px;
                    }
                    h3 {
                        color: var(--primary);
                        font-size: 16px;
                        @include mixin.xs-medium {
                        font-size: 14px;
                        @include mixin.large {
                            font-size: 14px;
                        }
                    }
                    }
                    ul {
                        li {
                            font-size: 16px;
                            color: var(--white);
                            @include mixin.xs-medium {
                                font-size: 14px;
                            }
                            @include mixin.large {
                            font-size: 14px;
                            }
                        }
                    }
                }

                   

            }
        }

    }
</style>