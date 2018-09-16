<template>
  <div class="canvas" :style="{ width: width, height: height }" ref="canvas">
      Canvas<br>
      width: {{width}}<br>
      height: {{height}}<br>
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  computed: {
    dimensions () {
      return this.$store.getters.getDimensions
    },
    width () {
      return this.dimensions.width
    },
    height () {
      return this.dimensions.height
    }
  }
}
</script>

<style scoped lang="scss">
  .canvas { background-color: coral; }
</style>
