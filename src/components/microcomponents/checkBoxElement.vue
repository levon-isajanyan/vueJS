<template>
  <!-- table container -->
  <el-container class="checkbox-wrapper">
    <!-- table  -->
    <el-table :show-header="true" :data="tableData" stripetyle="width: 100%" :header-row-class-name="tableRowClassName">
      <!-- table vertical name row -->
      <el-table-column prop="name" :label="labelTitle" width="240" class="table-title">
        <!-- table  element[i] name -->
        <template slot-scope="scope">
          <label :for="scope.row.id">{{ scope.row.name }}</label>
        </template>
      </el-table-column>
      <!-- table vertical name price & percent -->
      <el-table-column prop="increase" class="table-title">
        <!-- table  element[i] price with text -->
        <template slot-scope="scope">
          <label :for="scope.row.id">( {{ checkBoxLabelSecond }} {{ scope.row.increase }}% )</label>
        </template>
      </el-table-column>
      <!-- table vertical checkbox -->
      <el-table-column>
         <!-- table  element[i] checkbox -->
        <template slot-scope="scope">
          <input class="billing-checkbox" type="checkbox"  :value="scope.row.id" checked="checkboxStatus" @input="$emit('inputEmit')">
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: 'checkBoxComplex',
  props: {
    // Title for table
    labelTitle: {
      type: String,
      default: 'Please select options (optional)'
    },
    // Boolean for table checkbox
    checkboxStatus: {
      type: Boolean,
      default: true
    },
    // Table price side text
    checkBoxLabelSecond: {
      type: String,
      default: 'Second text'
    }
  },
  data () {
    return {
      tableData: [{
        id: 222,
        name: 'Bilingual',
        extra_id: 2222,
        increase: 20
      },
      {
        id: 222,
        name: 'Copy-Editing',
        extra_id: 2222,
        increase: 10
      },
      {
        id: 224,
        name: 'Proof-reading',
        extra_id: 2224,
        increase: 20
      }
      ]
    }
  },
  methods: {
    // Set class for table title
    tableRowClassName ({ row, rowIndex }) {
      console.log(rowIndex)
      if (rowIndex >= 0) {
        return 'tr-header'
      }
    }
  }
}
</script>

<style  lang="scss">
  .tr-header {
    color: $text-color;
  }
</style>>
