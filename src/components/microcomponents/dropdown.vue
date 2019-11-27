<template>
  <div class="drodown-element">
    <!-- Label -->
    <div class="drodown-label sub-title">
      <label>{{ dropdownLabel }}</label>
    </div>
    <el-dropdown  size="medium" split-button  @command="commandSelect">
      {{ currentOption }}
      <el-dropdown-menu slot="dropdown">
        <!-- Iterate over aaray from vuex and  render each [i] element -->
        <el-dropdown-item :command="index + 1" v-for="(item, index) in writerDropDownArray" :key="item.id" >
          {{ index + 1 }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'dropdown-input',
  props: {
    // Label text props
    dropdownLabel: {
      type: String,
      default: 'this is default label'
    }
  },
  data: function () {
    return {
      currentOption: 1
    }
  },
  computed: {
    ...mapState([
      'writerDropDownArray' // writers element array from vuex
    ])
  },
  methods: {
    // Method to call when user click on item
    commandSelect (argument) {
      this.$emit('dropDownChange', argument)
      // Via argument select value
      this.currentOption = argument
      console.log(`I am from dropdown and my argument is ${argument}`)
    }
  }
}
</script>

<style scoped lang="scss">
  .drodown-label {
    font-size: $small-typograpy-size;
  }
</style>
