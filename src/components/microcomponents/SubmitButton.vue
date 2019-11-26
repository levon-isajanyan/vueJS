<template>
  <el-button class="buybutton" :disabled="buttonDisableStatus" @click="callBuyBtnEMit()">
    <!-- Shopping cart iconwith text -->
    <span class="el-icon-shopping-cart-1"></span>
    {{ buttonText }}
    <!-- Money icon with text -->
    <span class="el-icon-money">
      {{ buttonPrice }}
    </span>
  </el-button>
</template>

<script>
export default {
  name: 'button-ui',
  props: {
    // Button text props
    buttonText: {
      type: String,
      default: 'default button text'
    },
    // Button disable props
    buttonDisableStatus: {
      type: Boolean,
      default: false
    },
    // Button price props
    buttonPrice: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // Button evenet  $emit
    callBuyBtnEMit () {
      this.$emit('buyBtnEmit')
    }
  }
}
</script>

<style  lang="scss">
  .buybutton {
    @include buttonProperties($button-background, $text-reverse-color, $normal-typography-size, $text-reverse-color, $hover-color, $hover-color, $border-radius);
  }
</style>
