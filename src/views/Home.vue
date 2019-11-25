<template>
  <div class="home">
    <el-row>
      <el-col :span="12">
        <el-container>
          <img alt="Vue logo" src="../assets/logo.png">
        </el-container>
      </el-col>
      <el-col :span="12">
        <el-container>
          <h1>
            {{$t('message', currentSelectedLanguage)}}
          </h1>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState([
      'currentSelectedLanguage'
    ])
  }
}
</script>
