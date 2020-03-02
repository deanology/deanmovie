import Index from './components/Index.vue'
import Categories from './components/Categories.vue'
import Featured from './components/Featured.vue'

const routes = [
    { path: '/', component: Index, name: 'index' },
    { path: '/categories', component: Categories, name: 'categories' },
    { path: '/featured', component: Featured, name: 'featured' },
];

export default routes;