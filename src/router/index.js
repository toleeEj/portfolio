import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShopView from '../views/ShopView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import ContactUsView from '../views/ContactUsView.vue';
import CartView from '../components/CartView.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopView,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetailView,
    props: true,
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutUsView,
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: ContactUsView,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
