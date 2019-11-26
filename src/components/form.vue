<template>
  <form>
    <!-- Техtarea -->
    <div>
      <!-- Label -->
      <div class="input-icon-label sub-title">
        <label>{{ $t(inputLabelsArray[1], currentSelectedLanguage) }}</label>
      </div>
      <el-input
        type="textarea"
        :rows="2"
        resize="none"
        :change="countWords(textarea)"
        v-model="textarea">
      </el-input>
    </div>
    <!-- Input with icon -->
    <div>
      <!-- Label -->
      <div class="input-icon-label sub-title">
        <label>{{ $t(inputLabelsArray[0], currentSelectedLanguage) }}  {{  currencyArray[0]  }}</label>
      </div>
      <!-- Input -->
      <el-input type="number" :min="5" max="500" size="medium" v-model="inputIconV">
        <template slot="prepend"><i class="el-icon-money"></i></template>
      </el-input>
    </div>
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
      currentPrice: 89,
      // Input icon v-model
      inputIconV: '',
      // Text area v-model
      textarea: '',
      // FUnction to count words length
      countWordsFunction: function (str) {
        return str.trim().split(/\s+/).length
      }
    }
  },
  computed: {
    ...mapState([
      'languageList', // Languages array which available for this app
      'currentSelectedLanguage',
      'buttonsTextArray', // Button text translation
      'checkBoxTextArray', // Checkbox text translation
      'dropdownLabelArray', // Dropdown label text transalation
      'inputLabelsArray', // Standart input label text translation
      'currencyArray', // Currency array from vuex
      'validationRulesArray'
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
    },
    // Count word and if words will be more than 30 then replace with empty string
    countWords (e) {
      if (this.countWordsFunction(e) > this.validationRulesArray[0].textAreaWordMaximum) {
        e.Replace(e, String.Empty)
      }
    }
  }
}
</script>

<style  lang="scss">
  .input-icon-label {
    font-size: $small-typograpy-size;
  };
</style>
