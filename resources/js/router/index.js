import { createRouter,createWebHistory } from "vue-router";

import List from "../crud/List.vue";
import Add from "../crud/AddNew.vue";
import studetnEdit from "../crud/EditData.vue";

const routes = [

    { path: "/", name: "List", component: List },
    { path: "/add-new", name: "Add", component: Add },
    { path: "/student/edit/:id", name: "student.edit", component: studetnEdit },
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;