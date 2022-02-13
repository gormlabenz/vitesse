// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import './styles/main.css'
import {routes} from './router'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.js')).forEach(i => i.install?.(ctx))
  },
)
