<template>
  <svg class="c-icon">
        <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
  import '../svg.js'
  export default {
    props: ['name']
  }
</script>

<style lang="scss">
  .c-icon {
      width: 1em;
      height: 1em;
    }
</style>