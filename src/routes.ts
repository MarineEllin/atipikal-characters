import type { RouteRecordRaw } from "vue-router";
import Homepage from "./components/Homepage.vue";
import CharacterDetails from "./components/CharacterDetails.vue";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Homepage,
    },
    {
        path: "/details/:characterId",
        component: CharacterDetails
    },
    {
        path: "/:notfound(.*)",
        component: Homepage
    }
]