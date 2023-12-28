import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import MySupports from '../views/supports/MySupports.vue'
import ModulesAndLessons from '../views/modules/ModulesAndLessons.vue'
import Auth from '../views/auth/Auth.vue'
import ForgetPassword from '../views/auth/ForgetPassword.vue'

const routes = [

  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [

      {
        path: 'modulos',
        name: 'campus.modules',
        component: ModulesAndLessons
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupports
      },
      {
        path: '',
        name: 'campus.home',
        component: HomeView
      }

    ]
  },


  {
    path: '/',
    name: 'auth',
    component: Auth, // Substitua o ponto e vírgula por dois pontos
  },
  {
    path: '/recuperar-senha',
    name: 'forget.password',
    component: ForgetPassword, // Substitua o ponto e vírgula por dois pontos


  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
