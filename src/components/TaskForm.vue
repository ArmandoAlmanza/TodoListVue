<template>
    <form @submit.prevent="saveTask()">
        <input type="text" placeholder="Write a title" v-model="task.title" />

        <textarea
            placeholder="Write a task"
            rows="4"
            v-model="task.description"
        ></textarea>

        <button>Save</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interface/Task";
import { createTask } from "@/api/TaskService";

export default defineComponent({
    data() {
        return {
            task: {} as Task,
        };
    },
    methods: {
        async saveTask() {
            await createTask(this.task);
        },
    },
});
</script>
