<template>
  <div class="m-crumbs">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">{{ city }}美团</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a
          href="/"
        >{{ city }}{{ _keyword }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'ModuleCrumbs',
  props: {
    keyword: {
      type: String,
      default: ''
    }
  },
  computed: {
    city() {
      return this.$store.state.geo.position.city.replace('市', '')
    },
    _keyword() {
      return decodeURIComponent(this.keyword)
    }
  }
}
</script>
