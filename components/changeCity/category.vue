<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd
        v-for="(item, index) in list"
        :key="index + item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      v-for="item in block"
      :key="item"
      class="m-categroy-section">
      <dt :id="'city-' + item.title">{{ item.title }}</dt>
      <dd>
        <span
          v-for="sub of item.city"
          :key="sub">
          {{ sub }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
import pyjs from 'js-pinyin'
export default {
  name: 'ModuleCategory',
  data() {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      block: []
    }
  },
  async mounted() {
    const blocks = []
    const { status, data: { city } } = await this.$axios.get('/geo/city')
    if (status === 200) {
      let pinyin
      let code
      const temp = {}
      city.forEach((item) => {
        pinyin = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
        code = pinyin.charCodeAt(0)
        if (code > 96 && code < 123) {
          if (!temp[pinyin]) {
            temp[pinyin] = []
          }
          temp[pinyin].push(item.name)
        }
      })
      for (const [key, value] of Object.entries(temp)) {
        blocks.push({
          title: key.toUpperCase(),
          city: value
        })
      }
      blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
      this.block = blocks
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/changeCity/categroy.scss';
</style>
