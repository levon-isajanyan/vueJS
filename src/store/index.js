import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // LAnguage list
    languageList: [
      {
        languageName: 'Armenian',
        countryCode: 'am'
      },
      {
        languageName: 'Russian',
        countryCode: 'ru'
      },
      {
        languageName: 'English',
        countryCode: 'us'
      }
    ],
    // Current sleected labguage for i18n
    currentSelectedLanguage: 'en'
  },
  mutations: {
    // changeLanguageAction muatation
    changeLanguageMutation (state, value) {
      state.currentSelectedLanguage = value
    }
  },
  actions: {
    // map action from view side
    changeLanguageAction (context, value) {
      context.commit('changeLanguageMutation', value)
    }
  }
})
