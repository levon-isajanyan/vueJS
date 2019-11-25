<template>
  <div id="app">
    <!-- Header -->
    <el-header>
      <el-row>
        <!-- Header left side block -->
        <el-col :span="18"></el-col>
        <!-- Header right side block -->
        <el-col :span="6" :offset="18">
          <!-- Condition over language list in case of array undefined or empty -->
          <div v-if="languageList.length < 1 || languageList == undefined">
            <country-flags />
          </div>
          <!-- Condition over in case of language list full array -->
          <div v-else>
            <ul class="language-collection-wrapper">
              <!-- Iterate over array of language -->
              <li v-for="item in languageList" v-bind:key="item.id">
                <!-- <A> tag of each [i] element -->
                <a class="languagebox" href="#" @click="changeLanguageAction(item.countryCode)">
                  <country-flags :countryFlagProp="item.countryCode" :languageText="item.languageName"/>
                </a>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <!-- Body -->
    <div class="wrapper">
      <el-row>
        <el-col :span="12">
          <!-- Vue-router to modal page -->
          <router-link to="/">
            Home
          </router-link>
        </el-col>
        <el-col :span="12">
          <!-- Vue-router to technician page -->
          <router-link to="/technical">
            Technical description
          </router-link>
        </el-col>
      </el-row>
    </div>
    <router-view />
  </div>
</template>

<script>
// import country flag component
import countryFlags from '@/components/microcomponents/flags.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    countryFlags
  },
  data: function () {
    return {

    }
  },
  computed: {
    ...mapState([
      'languageList' // Languages array which available for this app
    ])
  },
  methods: {
    ...mapActions([
      'changeLanguageAction' // Event action to choose which language is choosed
    ])
  }
}
</script>

<style  lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* align flag box wrapper */
.language-collection-wrapper > li {
  float: $right;
  list-style-type: $none;
  @include marginMixin(7px, 7px, 7px, 7px);
}
/* Disable underline in <a> tag */
.language-collection-wrapper > li > a {
  text-decoration: $none;
}
/* Hover effect for text when user work with flag */
.languagebox  p{
  &:hover {
    color: $hover-color;
  }
  &:active {
    color: $active-color;
  }
  &:visited {
    color: $hover-color;
  }
}
</style>
