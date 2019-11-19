<template>
  <div class="page-detail">
    <el-row>
      <el-col>
        <crumbs :keyword="keyword" :type="type" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>2</el-col>
    </el-row>
    <el-row>
      <el-col>3</el-col>
    </el-row>
    <el-row>
      <el-col>4</el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from '@/components/detail/crumbs'
export default {
  name: 'Detail',
  components: {
    Crumbs
  },
  data() {
    return {
      keyword: '',
      type: ''
    }
  }
}
</script>

<style lang="scss">
</style>
