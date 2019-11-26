<template>
  <form>
    <!-- Checkbox table -->
    <check-box @inputEmit="change()" :labelTitle="$t(checkBoxTextArray[0], currentSelectedLanguage)" :checkBoxLabelSecond="$t(checkBoxTextArray[1], currentSelectedLanguage)" />
    <!-- Submit button -->
    <buy-btn @buyBtnEmit="buyThisItem()" :buttonText="$t(buttonsTextArray[0], currentSelectedLanguage)" :buttonPrice="currentPrice" />
  </form>
</template>

<script>
import { mapState } from 'vuex'
// import buy btn
import buyBtn from '@/components/microcomponents/SubmitButton.vue'
// Import check box
import checkBox from '@/components/microcomponents/checkBoxElement.vue'

export default {
  name: 'buy-form',
  components: {
    buyBtn,
    checkBox
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
      'checkBoxTextArray' // Checkbox text translation
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
    }
  }
}
</script>

<style>
</style>
