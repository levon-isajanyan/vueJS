<template>
  <!-- Submit button -->
  <buy-btn @buyBtnEmit="buyThisItem()" :buttonText="$t(buttonsTextArray[0], currentSelectedLanguage)" :buttonPrice="currentPrice" />
</template>

<script>
import { mapState } from 'vuex'
// import buy btn
import buyBtn from '@/components/microcomponents/SubmitButton.vue'

export default {
  name: 'buy-form',
  components: {
    buyBtn
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
      'buttonsTextArray' // Button text translation
    ])
  },
  methods: {
    // Emitted function to call when user click on submit btn
    buyThisItem () {
      alert(`You have bought item via emit`)
    }
  }
}
</script>

<style>
</style>
