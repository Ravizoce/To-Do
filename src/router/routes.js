const routes = [
  {
    path: "/",
    name: "todo",
    component: () => import("layouts/Layout.vue"),
    children: [
      {
        name: "ToDo",
        path: "",
        component: () => import("src/pages/ToDo.vue"),
      },
      {
        name: "Seeting",
        path: "/setting",
        component: () => import("src/pages/SettingsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
