<template>
  <el-button :disabled="buttonDisableStatus">
    {{buttonText}}
  </el-button>
</template>

<script>
export default {
  name: 'button-ui',
  props: {
    buttonText: {
      type: String,
      default: 'default button text'
    },
    buttonDisableStatus: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
