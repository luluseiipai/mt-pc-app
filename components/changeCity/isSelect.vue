<template>
  <div class="m-select">
    <span class="name">按省份选择:</span>
    <el-select v-model="pValue" placeholder="省份">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="cValue" :disabled="!city.length" placeholder="城市">
      <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <span class="name">直接搜索:</span>
    <el-autocomplete
      v-model="input"
      @select="handleSelect"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
    />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'ModuleSelect',
  data() {
    return {
      pValue: '',
      province: [],
      cValue: '',
      city: [],
      cities: [],
      input: ''
    }
  },
  watch: {
    async pValue(val) {
      const {
        status,
        data: { city }
      } = await this.$axios.get(`/geo/province/${val}`)
      if (status === 200) {
        this.city = city.map((item) => {
          return {
            value: item.id,
            label: item.name
          }
        })
        this.cValue = ''
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    querySearchAsync: _.debounce(async function(query, cb) {
      if (this.cities.length) {
        cb(this.cities.filter(item => item.value.includes(query)))
      } else {
        const {
          status,
          data: { city }
        } = await this.$axios.get('/geo/city')
        if (status === 200) {
          this.cities = city.map((item) => {
            return {
              value: item.name
            }
          })
          cb(this.cities.filter(item => item.value.includes(query)))
        } else {
          cb([])
        }
      }
    }, 200),
    handleSelect(item) {
      window.console.log(item)
    },
    async initData() {
      const {
        status,
        data: { province }
      } = await this.$axios.get('/geo/province')
      if (status === 200) {
        this.province = province.map((item) => {
          return {
            value: item.id,
            label: item.name
          }
        })
        this.cValue = ''
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iSelect.scss";
</style>
