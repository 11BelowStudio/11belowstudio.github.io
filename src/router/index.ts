import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

// route-level code splitting
const AboutView = () => import('../views/AboutPage.vue');
const ResumeView = () => import('../views/ResumePage.vue')
const GameView = () => import('../views/GameProjects.vue')
const OtherView = () => import('../views/OtherProjects.vue')
const ContactView = () => import('../views/ContactPage.vue')
const E404View = () => import('../views/404Page.vue')

export function createRouter(){
  return _createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'Root',
        component: AboutView
      },
      {
        path: '/cv',
        name: 'CV',
        component: ResumeView
      },
      {
        path: '/game-projects',
        name: 'Game Projects',
        component: GameView
      },
      {
        path: '/other-projects',
        name: 'Other Projects',
        component: OtherView
      },
      {
        path: '/contact',
        name: 'Contact',
        component: ContactView
      },
      {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: E404View
      }
    ]
  })
}
