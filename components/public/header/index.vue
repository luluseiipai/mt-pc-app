<template>
  <el-row class="m-header">
    <el-col :span="4">
      <geo />
    </el-col>
    <el-col :span="6">
      <user />
    </el-col>
    <el-col :span="14">
      <div class="grid-content bg-purple" />
    </el-col>
  </el-row>
</template>

<script>
import Geo from './geo'
import User from './user'
export default {
  components: {
    Geo,
    User
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/public/layout.scss';
</style>
