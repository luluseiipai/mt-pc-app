<template>
  <div class="m-menu">
    <dl
      @mouseleave="mouseLeave"
      class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menu"
        :key="index+item"
        @mouseenter="mouseEnter">
        <i :class="item.type" />{{ item.name }}<span class="arrow" />
      </dd>
    </dl>
    <div
      @mouseenter="sOver"
      @mouseleave="sOut"
      v-if="kind"
      class="detail">
      <template v-for="(item, idx) in curDetail.child">
        <h4 :key="idx+item">{{ item.title }}</h4>
        <span v-for="(subItem, index) in item.child" :key="index+subItem">
          {{ subItem }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      kind: '',
      menu: [{
        type: 'food',
        name: '美食',
        child: [{
          title: '美食',
          child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
        }]
      }, {
        type: 'takeout',
        name: '外卖',
        child: [{
          title: '外卖',
          child: ['美团外卖']
        }]
      }, {
        type: 'hotel',
        name: '酒店',
        child: [{
          title: '酒店星级',
          child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
        }]
      }]
    }
  },
  computed: {
    curDetail() {
      return this.menu.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    mouseLeave() {
      this._timer = setTimeout(() => {
        this.kind = ''
      }, 150)
    },
    mouseEnter(e) {
      this.kind = e.target.querySelector('i').className
    },
    sOver() {
      clearTimeout(this._timer)
    },
    sOut() {
      this.kind = ''
    }
  }
}
</script>

<style lang="css">
</style>
