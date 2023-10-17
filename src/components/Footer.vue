<template>
    <footer>
    <p class="logo">Atipikal Characters</p>
    <p>​©2023 - Tous droits réservés</p>  
    </footer>
</template>
    
<script setup lang="ts">
</script>
    
<style lang="scss" scoped>
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80px;
        background-color: var(--secondary);
        color: var(--white);
        .logo{
            color: var(--primary);
            font-size: 24px;
            margin-bottom: 10px;
        }
        p {
            font-size: 12px;
        }
    }
</style>