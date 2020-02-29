import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Student from './components/Student.vue'
import Redirect from './components/Redirect.vue'
import Error404 from './components/Error404.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/student/:id', component: Student, name: 'student' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/error404', component: Error404, name: 'error404' },
];

export default routes;