<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props:{
    gutter: {
      type:[Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  mounted() {
    // console.log(this.$children)
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  },
  methods: {},
  computed: {
    rowStyle() {
      let {gutter} = this
      return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
    },
    rowClass() {
      let {align} = this
      return align && `align-${align}`
    }
  }
}
</script>

<style lang='scss' scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
  }
</style>
