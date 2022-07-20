// Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import Vuetify from 'vuetify'
import { getCurrentInstance } from '@vue/composition-api'
// import { loadFonts } from './webfontloader'

// loadFonts()

function installVuetify() {
  Vue.use(Vuetify)
  return new Vuetify({
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#8E24AA',
          accent: '#EC407A',
        },
        dark: {
          primary: '#BA68C8',
          accent: '#FF80AB',
        },
      },
    },
  })
}

export default installVuetify

/** Get vuetify instance (For Composition api) */
export function useVuetify() {
  /** Get Instance */
  const instance = getCurrentInstance()
  if (!instance) {
    throw new Error('Should be used in setup().')
  }
  return instance.proxy.$vuetify
}
