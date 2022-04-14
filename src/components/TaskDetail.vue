<template>
    <h1>Task details we</h1>

    <form @submit.prevent="handleUpdate()">
        <input type="text" v-model="currentTask.title" />
        <textarea rows="3" v-model="currentTask.description"></textarea>

        <button>Update</button>
    </form>

    <button @click="hanldeDelete()">Delete</button>
</template>

<script lang="ts">
import { deleteTask, getTask, updateTask } from "@/api/TaskService";
import { Task } from "@/interface/Task";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    methods: {
        async loadTask(id: string) {
            const res = await getTask(id);
            this.currentTask = res.data;
        },
        async handleUpdate() {
            if (typeof this.$route.params.id === "string") {
                await updateTask(this.$route.params.id, this.currentTask);
                console.log("si se updateo we");
            }
        },
        async hanldeDelete() {
            if (typeof this.$route.params.id === "string") {
                await deleteTask(this.$route.params.id);
                console.log("Ya se borro we");
                this.$router.push({ name: "tasks" });
            }
        },
    },
    mounted() {
        if (typeof this.$route.params.id === "string") {
            this.loadTask(this.$route.params.id);
        }
    },
    data() {
        return {
            currentTask: {} as Task,
        };
    },
});
</script>
