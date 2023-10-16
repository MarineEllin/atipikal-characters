<script setup lang="ts">
import {type CharacterObject} from "../models/character.model";
import {defineProps, ref} from "vue";

const props = defineProps({
  character: {
    type: Object as () => CharacterObject,
    required: true,
  },
});

// 168x252px
const imageFormat = "portrait_fantastic";
const imagePath = `${props.character.thumbnail.path}/${imageFormat}.${props.character.thumbnail.extension}`;

const isEntering = ref(false);
const isLeaving = ref(false);

const startCardIn = () => {
    isLeaving.value = true;
    isEntering.value = false;
}

const startCardOut = () => {
    isEntering.value = true;
    isLeaving.value =  false;
}

</script>

<template>
    <router-link :to="'/details/' + character.id">
    <div class="cardContainer" :class="{isEntering: isEntering, isLeaving: isLeaving}" @mouseenter="startCardIn" @mouseleave="startCardOut">
        <div class="imageContainer">
           <img :src="imagePath" :alt="character.name"> 
        </div>
            
           <p>{{ character.name.toUpperCase() }}</p> 
    </div>
    </router-link>
    
</template>
    
    
    
<style lang="scss" scoped>
.cardContainer {
    position: relative;
    width: 200px;
    height: 350px;
    background-color: var(--secondary);
    
    .imageContainer {
        width: 100%;
        height: 230px;
        overflow: hidden;
        img {
            width: 100%;
            transition: all 0.8s;
        }
    }
    p {
        padding: 20px;
        color: var(--primary);
        font-size: 16px;
        font-weight: 500;
        text-align: center;
    }
    &:after {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        display: block;
        border-top: 15px solid var(--secondary);
        border-left: 15px solid var(--secondary);
        border-right: 15px solid var(--white);
        border-bottom: 15px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));

    }
    &:hover .imageContainer img {
            transform: scale(1.1);
        } 
}

.isEntering {
    &:after{
        animation: cardOut;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }
}

.isLeaving {
    &:after{
        animation: cardIn;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }
}

@keyframes cardIn {
    0% {
        border-top: 15px solid var(--secondary);
        border-left: 15px solid var(--secondary);
        border-right: 15px solid var(--white);
        border-bottom: 15px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    20% {
        border-top: 12px solid var(--secondary);
        border-left: 12px solid var(--secondary);
        border-right: 12px solid var(--white);
        border-bottom: 12px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    40% {
        border-top: 10px solid var(--secondary);
        border-left: 10px solid var(--secondary);
        border-right: 10px solid var(--white);
        border-bottom: 10px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    60% {
        border-top: 7px solid var(--secondary);
        border-left: 7px solid var(--secondary);
        border-right: 7px solid var(--white);
        border-bottom: 7px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    80% {
        border-top: 4px solid var(--secondary);
        border-left: 4px solid var(--secondary);
        border-right: 4px solid var(--white);
        border-bottom: 4px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    100% {
        border-top: 0px solid var(--secondary);
        border-left: 0px solid var(--secondary);
        border-right: 0px solid var(--white);
        border-bottom: 0px solid var(--white);
    }
}
    
    @keyframes cardOut {
    0% {
        border-top: 0px solid var(--secondary);
        border-left: 0px solid var(--secondary);
        border-right: 0px solid var(--white);
        border-bottom: 0px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    20% {
        border-top: 4px solid var(--secondary);
        border-left: 4px solid var(--secondary);
        border-right: 4px solid var(--white);
        border-bottom: 4px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    40% {
        border-top: 7px solid var(--secondary);
        border-left: 7px solid var(--secondary);
        border-right: 7px solid var(--white);
        border-bottom:7px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    60% {
        border-top: 10px solid var(--secondary);
        border-left: 10px solid var(--secondary);
        border-right: 10px solid var(--white);
        border-bottom: 10px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    80% {
        border-top: 12px solid var(--secondary);
        border-left: 12px solid var(--secondary);
        border-right: 12px solid var(--white);
        border-bottom: 12px solid var(--white);
        filter: drop-shadow(-7px -7px 5px rgba(0,0,0,0.5));
    }
    100% {
        border-top: 15px solid var(--secondary);
        border-left: 15px solid var(--secondary);
        border-right: 15px solid var(--white);
        border-bottom: 15px solid var(--white);
    }
}


</style>