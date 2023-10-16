<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import TheFooter from "./components/Footer.vue";
import Loading from "./components/Loading.vue";
</script>


<template>
    <div class="appContainer">
        <TheHeader class="header"/>
        <router-view v-slot="{ Component}">
            <KeepAlive include="Homepage">
                <Suspense timeout="0">
                    <template #default>
                        <component :is="Component"/>
                    </template>
                    <template #fallback>
                        <Loading />
                    </template>
                </Suspense>     
            </KeepAlive>
         </router-view >
        <TheFooter class="footer"/>
    </div>
</template>

<style lang="scss">
// @use './assets/base.scss' as *;
.appContainer {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>