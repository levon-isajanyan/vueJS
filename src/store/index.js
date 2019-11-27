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
    currentSelectedLanguage: 'en',
    navigationModalWord: [
      'navigationModalSection',
      'technicalSection'
    ],
    buttonsTextArray: [
      'buyItemBtnText'
    ],
    checkBoxTextArray: [
      'checkBoxInfoTitle',
      'checkboxMiddleCellText'
    ],
    dropdownLabelArray: [
      'writersCountDropdownText'
    ],
    inputLabelsArray: [
      'inputLabelBudgetText',
      'inputTextAreaInstructionText',
      'textAreaPlaceholderText',
      'inputLabelLinkText',
      'inputLinkPLaceholder'
    ],
    currencyArray: [
      'USD',
      'RUB',
      'EUR',
      'AMD'
    ],
    writerDropDownArray: [
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
      { id: 19 },
      { id: 20 },
      { id: 1 },
      { id: 2 },
      { id: 11 },
      { id: 7 },
      { id: 83 },
      { id: 27 }
    ],
    validationRulesArray: [
      { textAreaWordMaximum: 30 }
    ]
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
