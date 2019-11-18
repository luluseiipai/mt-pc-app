<template>
  <div class="m-hcity">
    <dl>
      <dd>热门城市: </dd>
      <dd
        v-for="(item, index) in list"
        :key="index + item">
        {{ hotCity(item) }}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'MoaduleHotCity',
  data() {
    return {
      list: []
    }
  },
  computed: {
    hotCity(item) {
      return function (item) {
        return item.name === '市辖区' ? item.province : item.name
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const { status, data: { hots } } = await this.$axios.get('/geo/hotCity')
      if (status === 200) {
        this.list = hots
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/changeCity/hot.scss";
</style>
