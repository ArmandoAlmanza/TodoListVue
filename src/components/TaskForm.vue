<template>
    <h1 class="task-detail-title">The creator 3000</h1>
    <div class="change">
        <form @submit.prevent="saveTask()" class="task-form container">
            <fieldset>
                <legend>Create a new Task</legend>
                <label for="title">Enter the name: </label>
                <input
                    name="title"
                    class="title"
                    type="text"
                    placeholder="Write a title..."
                    v-model="task.title"
                />
                <label for="desc">Enter a description: </label>
                <textarea
                    name="desc"
                    class="description"
                    placeholder="Write a task..."
                    rows="4"
                    v-model="task.description"
                    maxlength="225"
                ></textarea>

                <button class="btn btn-save">
                    <span class="text">Save</span>
                    <span class="icon save"> ✓ </span>
                </button>
            </fieldset>
        </form>

        <div class="card container">
            <div class="tools">
                <div class="circle">
                    <span class="red box"></span>
                </div>
                <div class="circle">
                    <span class="yellow box"></span>
                </div>
                <div class="circle">
                    <span class="green box"></span>
                </div>
            </div>
            <div class="card__content">
                <h3 class="card-hedaer">{{ task.title }}</h3>
                <p class="card-body">{{ task.description }}</p>
            </div>
        </div>
    </div>
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
