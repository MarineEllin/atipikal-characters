<script setup lang="ts">
</script>

<template>
    <div class="loadingContainer">
        <div class="loader"></div>
    </div>
</template>
    
    
    
<style lang="scss" scoped>
.loadingContainer {
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    .loader {
        width: 100px;
        height: 100px;
        border: 5px solid var(--secondary);
        border-radius: 50%;
        position: relative;
        animation: rotation 1s linear infinite;
        display: inline-block;

        &::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 5px solid;
            border-color: var(--primary) transparent;
        }
    }
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }  
    to {
        transform: rotate(360deg);
    } 
}
</style>