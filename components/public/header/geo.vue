<template>
  <div class="m-geo">
    <i class="el-icon-location" />{{ $store.state.geo.position.city }}
    <nuxt-link class="changeCity" to="/changeCity">
      切换城市
    </nuxt-link>
    {{ curPlace }}
  </div>
</template>

<script>
export default {
  name: 'ModuleGeo',
  computed: {
    curPlace() {
      return `[ ${this.$store.state.geo.position.province} ${this.$store.state.geo.position.city} ]`
    }
  }
}
</script>

<style lang="scss">
</style>
