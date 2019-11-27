<template>
  <form :name="JsonResponse.id">
    <div class="image-wrapper" :style="{  backgroundImage: 'url(' + JsonResponse.images.full_size + ')'  }">
        <el-button class="roundicon" icon="el-icon-back" circle></el-button>
    </div>
    <h4 class="form-title">
      {{ $t(titlesArray[1], currentSelectedLanguage) }}
    </h4>
    <h3 class="url-title">
      {{ JsonResponse.publication }}
    </h3>
    <h3 class="title-element">
      {{ $t(titlesArray[0], currentSelectedLanguage) }}
    </h3>
    <hr>
    <!-- Link input -->
    <div>
      <!-- Label -->
      <div class="input-icon-label sub-title">
        <label>{{ $t(inputLabelsArray[3], currentSelectedLanguage) }}</label>
      </div>
      <!-- Link input -->
      <el-input
        @input="checkLink(linkInputVmodel)"
        :placeholder="$t(inputLabelsArray[2], currentSelectedLanguage) + ` ` + $t(inputLabelsArray[4], currentSelectedLanguage)"
        v-model="linkInputVmodel">
      </el-input>
    </div>
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
        v-on:input="countWords(textarea)"
        :placeholder="$t(inputLabelsArray[2], currentSelectedLanguage) + ` ` + $t(inputLabelsArray[1], currentSelectedLanguage)"
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
      <el-input  size="medium" v-model="inputIconV" @input="budgetCheck(inputIconV)">
        <template slot="prepend"><i class="el-icon-money"></i></template>
      </el-input>
    </div>
    <!-- Dropdown -->
    <drop-dwn @dropDownChange="writersCount($event)"  :dropdownLabel="$t(dropdownLabelArray[0], currentSelectedLanguage)" />
    <!-- Checkbox table -->
    <check-box @inputEmit="change(index, $event)" :labelTitle="$t(checkBoxTextArray[0], currentSelectedLanguage)" :checkBoxLabelSecond="$t(checkBoxTextArray[1], currentSelectedLanguage)" />
    <!-- Submit button -->
    <buy-btn @buyBtnEmit="buyThisItem()" :buttonText="$t(buttonsTextArray[0], currentSelectedLanguage)" :buttonPrice="currentPrice" />
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
      currentPrice: 0,
      // Input icon v-model
      inputIconV: null,
      // Text area v-model
      textarea: null,
      // FUnction to count words length
      countWordsFunction: function (str) {
        return str.trim().split(/\s+/).length
      },
      option: 2,
      linkInputVmodel: null,
      urlValidationFunction: function (value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value)
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
      'validationRulesArray', // Rules validation array
      'titlesArray', // Titles translation array
      'JsonResponse'
    ])
  },
  methods: {
    ...mapActions([
      'checkedInputsValue' // Event action to choose which language is choosed
    ]),
    // Emitted function to call when user click on submit btn
    buyThisItem () {
      alert(`You have bought item via emit`)
    },
    // Emitted function for checkbox
    change (arg) {
      console.log(arg)
    },
    // Emitted function for writers count
    writersCount (arg) {
      this.checkedInputsValue({
        type: 'writers',
        valid_writers: true,
        writers_value: arg
      })
    },
    // Count word and if words will be more than 30 then replace with empty string
    countWords (e) {
      if (this.countWordsFunction(e) > this.validationRulesArray[0].textAreaWordMaximum) {
        let requredRangeOfWords = e.split(/\s+/).slice(0, this.validationRulesArray[0].textAreaWordMaximum).join(' ')
        this.textarea = requredRangeOfWords
        this.checkedInputsValue({
          type: 'instruction',
          valid_instruction: false,
          instruction_value: this.textarea
        })
      } else {
        this.checkedInputsValue({
          type: 'instruction',
          valid_instruction: true,
          instruction_value: e
        })
      }
    },
    // Link url validation
    checkLink (e) {
      let condition = this.urlValidationFunction(e)
      if (condition) {
        this.checkedInputsValue({
          type: 'link',
          valid_link: true,
          link_value: e
        })
      } else {
        this.checkedInputsValue({
          type: 'link',
          valid_link: false,
          link_value: e
        })
      }
    },
    // Check budget
    budgetCheck (e) {
      let filteredText = e.replace(/\D/g, '')
      this.inputIconV = filteredText
      let numberConverted = Number(this.inputIconV)
      if (numberConverted >= this.validationRulesArray[1].budgetMin && numberConverted <= this.validationRulesArray[1].budgetMax) {
        this.checkedInputsValue({
          type: 'budget_value',
          valid_budget: true,
          budget: numberConverted
        })
      } else {
        this.checkedInputsValue({
          type: 'budget_value',
          valid_budget: false,
          budget: 0
        })
      }
    }
  }
}
</script>

<style  lang="scss">
  .input-icon-label {
    font-size: $small-typograpy-size;
  };
  .title-element {
    color: $hover-color;
    font-size: $normal-typography-size;
  };
  .url-title {
    color: $active-color;
    font-size: $normal-typography-size;
  };
  .form-title {
    color: $text-color;
    font-size: $normal-typography-size;
  }
  .image-wrapper  img {
    max-width:100%;
    max-height:100%;
  }
  .image-wrapper a {
    display: $block
  }
  .image-wrapper {
    background-size: 100% 100%;
    @include minHeight (360px);
    position: $relative;
  }
  .roundicon {
    @include absoluteAlign (1em, 1em)
  }
</style>
