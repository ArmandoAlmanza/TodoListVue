<template>
    <ul>
        <li v-for="task in tasks" :key="task._id">
            {{task.title}}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTask } from "@/api/TaskService";
import { Task } from "@/interface/Task";

export default defineComponent({
    data() {
        return {
            tasks: [] as Task[],
        };
    },
    methods: {
        async loadTasks() {
            const res = await getTask();
            this.tasks = res.data;
        },
    },
    mounted() {
        this.loadTasks();
    },
});
</script>
