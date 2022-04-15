<template>
    <NavBar />
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import "sweetalert2/dist/sweetalert2.min.css";

export default defineComponent({
    name: "App",
    components: {
        NavBar,
    },
});
</script>
