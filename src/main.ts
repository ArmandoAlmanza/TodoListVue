import { createApp } from "vue";
import App from "./App.vue";
import "./styles/app.scss";
import router from "./routes/";

createApp(App).use(router).mount("#app");
