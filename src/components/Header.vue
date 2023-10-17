<template>
    <header class="headerContainer">
        <router-link to="/" class="logo">
           Atipikal Characters 
        </router-link>
        
    </header>
</template>
    
<script setup lang="ts">
</script>
        
<style lang="scss" scoped>
 
.headerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: var(--secondary);
    .logo {
       color: var(--primary);
    font-size: 32px; 
    }    
}

</style>