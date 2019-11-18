<template>
  <div class="page-changeCity">
    <el-row>
      <el-col>
        <is-select />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <hot-city />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <category />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IsSelect from '@/components/changeCity/isSelect'
import HotCity from '@/components/changeCity/hot'
import Category from '@/components/changeCity/category'
export default {
  name: 'ChangeCity',
  components: {
    IsSelect,
    HotCity,
    Category
  }
}
</script>
