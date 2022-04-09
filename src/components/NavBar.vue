<template>
    <header class="site-header">
        <h1>Todo List</h1>
        <nav class="navbar">
            <ul>
                <router-link to="/"> Tasks</router-link>
                <router-link to="/tasks/new"> Create Tasks</router-link>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: "NavBar",
});
</script>
