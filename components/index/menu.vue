<template>
  <div class="m-menu">
    <dl
      @mouseleave="mouseLeave"
      class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in $store.state.home.menu"
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
      menu: []
    }
  },
  computed: {
    curDetail() {
      return this.$store.state.home.menu.filter(item => item.type === this.kind)[0]
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
