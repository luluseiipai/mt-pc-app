<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left">
        <a href="/">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
            alt="美团">
        </a>
      </el-col>
      <el-col
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            @focus="Focus"
            @blur="Blur"
            @input="input"
            placeholder="搜索商家或地点" />
          <button class="el-button el-button--primary"><i class="el-icon-search" /></button>
          <dl
            v-if="isHotPlace"
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlace" :key="index">
              <a :href="'/products?keyword=' + item.name">{{ item.name }}</a>
            </dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <a :href="'/products?keyword=' + item.name">{{ item.name }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a v-for="(item, index) in hotPlace" :key="index" href="#">
            <a :href="'/products?keyword=' + item.name">{{ item.name }}</a>
          </a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="moive">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="bussiness">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right">
        <ul class="security">
          <li><i class="refund" /><p class="txt">随时退</p></li>
          <li><i class="single" /><p class="txt">不满意免单</p></li>
          <li><i class="overdue" /><p class="txt">过期退</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'SearchBar',
  data() {
    return {
      isFocus: false,
      search: '',
      searchList: []
    }
  },
  computed: {
    hotPlace() {
      return this.$store.state.home.hotPlace.slice(0, 5)
    },
    isHotPlace() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    Focus() {
      this.isFocus = true
    },
    Blur() {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input: _.debounce(async function() {
      const city = this.$store.state.geo.position.city.replace('市', '')
      this.searchList = []
      const { status, data: { top } } = await this.$axios('/search/top', {
        params: {
          input: this.search,
          city
        }
      })
      if (status === 200) {
        this.searchList = top.slice(0, 10)
      }
    }, 300)
  }
}
</script>

<style lang="scss">
</style>
