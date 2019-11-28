import Vue from 'vue'
import Vuex from 'vuex'

// Get only vuex global object keys values
function getObjectValues (globalObject, globalSubkey, globalSubkeyChildrenKey) {
  for (let key in globalObject) {
    if (globalObject.hasOwnProperty(key)) {
      // Global vuex subkey
      if (key === globalSubkey) {
        let object = globalObject[key]
        for (let subkeyChildren in object) {
          if (object.hasOwnProperty(subkeyChildren)) {
            if (subkeyChildren === globalSubkeyChildrenKey) {
              return object[subkeyChildren]
            }
          }
        }
      }
    }
  }
}

// Return increase only global object  values array element price which  status is true
function getObjectArraysKeyValues (globalState, globalStateSubkey, globalsubkeyChildren) {
  for (let key in globalState) {
    if (globalState.hasOwnProperty(key)) {
      if (key === globalStateSubkey) {
        let objectSubkey = globalState[key]
        if (objectSubkey.hasOwnProperty(globalsubkeyChildren)) {
          let arr = objectSubkey[globalsubkeyChildren]
          if (arr.length >= 1) {
            return arr.map(function (x) {
              if (x.checkStatus) {
                return x.increase
              }
            })
          } else {
            return false
          }
        }
      }
    }
  }
}

function calc (count, value, inclrease) {
  let customer = count
  let price = value
  let increasePrice = inclrease
  console.log(customer, price, increasePrice)
  if (Array.isArray(increasePrice) && increasePrice.length) {
    let x = customer * price
    for (let k = 0; k < increasePrice.length; k++) {
      x = x * (1 + increasePrice[k] / 100)
    }
    return x
  } else {
    let summary = customer * price
    return summary
  }
}

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
      { textAreaWordMaximum: 30 },
      {
        budgetMin: 5,
        budgetMax: 500
      }
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
      writers: {
        valid_writers: 3,
        writers_value: null
      },
      budget_value: {
        valid_budget: null,
        budget: 10
      },
      extra_option: [

      ],
      totalPriceForWork: 0
    }
  },
  mutations: {
    // changeLanguageAction muatation
    changeLanguageMutation (state, value) {
      state.currentSelectedLanguage = value
    },
    checkedMuation (state, value) {
      let writers = getObjectValues(state, 'RequestForm', 'writers')
      let budget = getObjectValues(state, 'RequestForm', 'budget_value')
      let increase = getObjectArraysKeyValues(state, 'RequestForm', 'extra_option')
      let oopa = calc(writers.writers_value, budget.budget_value, increase)
      console.log(oopa)
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
    },
    pushExtraIntoArray (state, value) {
      // Check if element iexist in extara_option array
      function checkObjectExistence (arrayArgument, arrayObjectId) {
        let index = arrayArgument.findIndex(x => x.id === arrayObjectId)
        return index
      }
      for (var prop in state.RequestForm) {
        if (Object.prototype.hasOwnProperty.call(state.RequestForm, prop)) {
          if (prop === value.type) {
            var extraArray = state.RequestForm[prop]
            if (Array.isArray(extraArray)) {
              if (extraArray.length >= 1) {
                for (let i = 0; i < extraArray.length; i++) {
                  if (extraArray[i].id === value.id) {
                    // Update already existence object
                    extraArray[i][Object.keys(extraArray[i])[0]] = Object.values(value)[0]
                    extraArray[i][Object.keys(extraArray[i])[1]] = Object.values(value)[1]
                    extraArray[i][Object.keys(extraArray[i])[2]] = Object.values(value)[2]
                    extraArray[i][Object.keys(extraArray[i])[3]] = Object.values(value)[3]
                    extraArray[i][Object.keys(extraArray[i])[4]] = Object.values(value)[4]
                  } else if (checkObjectExistence(extraArray, value.id) === -1) {
                    // Push new object of not exist with current ID which need to push
                    extraArray.push(value)
                  }
                }
              } else {
                // First time checkbox check event (invoke once)
                extraArray.push(value)
              }
            }
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
    },
    checkBoxAction (context, value) {
      context.commit('pushExtraIntoArray', value)
    }
  }
})
