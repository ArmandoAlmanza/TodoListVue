<template>
    <h1 class="task-detail-title">Current Task</h1>
    <div class="change container">
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
                <h3 class="card-hedaer">{{ currentTask.title }}</h3>
                <p class="card-body">{{ currentTask.description }}</p>
            </div>
        </div>
        <form @submit.prevent="handleUpdate()" class="task-form container">
            <fieldset>
                <legend>Update task: {{ currentTask.title }}</legend>

                <input class="title" type="text" v-model="currentTask.title" />
                <textarea
                    class="description"
                    rows="3"
                    v-model="currentTask.description"
                ></textarea>
                <div class="btns container">
                    <button class="btn btn-save">
                        <span class="text">Update</span>
                        <span class="icon save">✓ </span>
                    </button>

                    <button @click="hanldeDelete()" class="btn btn-delete">
                        <span class="text">Delete</span>
                        <span class="icon delete"> X </span>
                    </button>
                </div>
            </fieldset>
        </form>
    </div>
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
                this.$router.push({ name: "tasks" });
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
