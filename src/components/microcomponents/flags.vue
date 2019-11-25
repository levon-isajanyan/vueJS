<template>
  <div class="language-wrapper">
    <!-- iso is country letters see vue-country-flags for more -->
    <countryflag  :iso="countryFlagProp" />
    <p>
      {{ languageText }}
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import countryFlag from 'vue-country-flags'
Vue.use(countryFlag)

export default {
  name: 'flagComponent',
  props: {
    // Flag icon prop
    countryFlagProp: {
      type: String,
      default: 'us'
    },
    // Custom text inside flag
    languageText: {
      type: String,
      default: 'English'
    }
  }
}
</script>

<style scoped lang="scss">
  .language-wrapper p {
    @include marginMixin($zero, $zero, $zero, $zero);
    @include fontSizeMixin($small-typograpy-size);
    @include textPropertyMixin($text-color);
  }
</style>
