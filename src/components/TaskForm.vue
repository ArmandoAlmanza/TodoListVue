<template>
    <h1 class="task-detail-title">The creator 3000</h1>

    <form @submit.prevent="saveTask()" class="task-form container">
        <fieldset>
            <legend>Create a new Task</legend>
            <input
                class="title"
                type="text"
                placeholder="Write a title"
                v-model="task.title"
            />

            <textarea
                class="description"
                placeholder="Write a task"
                rows="4"
                v-model="task.description"
            ></textarea>

            <button class="btn btn-save">
                <span class="text">Save</span>
                <span class="icon save"> ✓ </span>
            </button>
        </fieldset>
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
            const res = await createTask(this.task);
            console.log(res);
            this.$router.push({ name: "tasks" });
        },
    },
});
</script>
