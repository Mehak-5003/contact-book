import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ContactDetailPage from '../views/ContactDetailPage.vue';
import AddContactPage from '../views/AddContactPage.vue';
import EditContactPage from '../views/EditContactPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/contact/:id', name: 'ContactDetailPage', component: ContactDetailPage },
  { path: '/add', name: 'AddContactPage', component: AddContactPage },
  { path: '/edit/:id', name: 'EditContactPage', component: EditContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
