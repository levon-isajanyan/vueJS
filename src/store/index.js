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
    titlesArray: [
      'formTitletext',
      'formMainTitle'
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
    ],
    JsonResponse: {
      id: '132',
      publication: 'Healty.com',
      images: {
        full_size: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'
      }
    },
    RequestForm: {
      link: {
        valid_link: null,
        link_value: null
      },
      instruction: {
        valid_instruction: null,
        instruction_value: null
      },
      writers_number: null,
      budget_value: {
        valid_budget: null,
        budget: null
      },
      extra_option: [

      ]
    }
  },
  mutations: {
    // changeLanguageAction muatation
    changeLanguageMutation (state, value) {
      state.currentSelectedLanguage = value
    },
    checkedMuation (state, value) {
      for (var prop in state.RequestForm) {
        if (Object.prototype.hasOwnProperty.call(state.RequestForm, prop)) {
          if (prop === value.type) {
            var currentFormObject = state.RequestForm[prop]
            // Assign information about validation status
            currentFormObject[Object.keys(value)[1]] = Object.values(value)[1]
            currentFormObject[Object.keys(value)[2]] = Object.values(value)[2]
          }
        }
      }
    }
  },
  actions: {
    // map action from view side
    changeLanguageAction (context, value) {
      context.commit('changeLanguageMutation', value)
    },
    checkedInputsValue (context, value) {
      context.commit('checkedMuation', value)
    }
  }
})
