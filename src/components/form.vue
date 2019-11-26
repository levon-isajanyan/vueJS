<template>
  <form>
    <!-- Dropdown -->
    <drop-dwn @dropDownChange="writersCount" :dropdownLabel="$t(dropdownLabelArray[0], currentSelectedLanguage)" />
    <!-- Checkbox table -->
    <check-box @inputEmit="change()" :labelTitle="$t(checkBoxTextArray[0], currentSelectedLanguage)" :checkBoxLabelSecond="$t(checkBoxTextArray[1], currentSelectedLanguage)" />
    <!-- Submit button -->
    <buy-btn @buyBtnEmit="buyThisItem()" :buttonText="$t(buttonsTextArray[0], currentSelectedLanguage)" :buttonPrice="currentPrice" />
  </form>
</template>

<script>
import { mapState } from 'vuex'
// Import dropdown
import dropDwn from '@/components/microcomponents/dropdown.vue'
// import buy btn
import buyBtn from '@/components/microcomponents/SubmitButton.vue'
// Import check box
import checkBox from '@/components/microcomponents/checkBoxElement.vue'

export default {
  name: 'buy-form',
  components: {
    buyBtn,
    checkBox,
    dropDwn
  },
  data: function () {
    return {
      // Current button dynamic price
      currentPrice: 89
    }
  },
  computed: {
    ...mapState([
      'languageList', // Languages array which available for this app
      'currentSelectedLanguage',
      'buttonsTextArray', // Button text translation
      'checkBoxTextArray', // Checkbox text translation
      'dropdownLabelArray' // Dropdown label text transalation
    ])
  },
  methods: {
    // Emitted function to call when user click on submit btn
    buyThisItem () {
      alert(`You have bought item via emit`)
    },
    // Emitted function for checkbox
    change (arg) {
      console.log(arg)
    },
    // Emitted function for writers count
    writersCount () {
      alert('I am from writers count emit')
    }
  }
}
</script>

<style>
</style>
