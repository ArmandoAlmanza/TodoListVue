<template>
    <div class="tasks container">
        <ul class="task-list">
            <li
                v-for="task in tasks"
                :key="task._id"
                class="task"
                @click="this.$router.push(`/tasks/${task._id}`)"
            >
                {{ task.title }}
                
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTasks } from "@/api/TaskService";
import { Task } from "@/interface/Task";

export default defineComponent({
    data() {
        return {
            tasks: [] as Task[],
        };
    },
    methods: {
        async loadTasks() {
            const res = await getTasks();
            this.tasks = res.data;
        },
    },
    mounted() {
        this.loadTasks();
    },
});
</script>
