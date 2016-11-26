<template>
  <span :class="classObject">{{spanObject.chars}}</span>
</template>

<script>
export default {
  name: 'typee-character',
  props: {
    spanObject: Object,
    currentIndex: Number
  },
  computed: {
    classObject () {
      return {active: this.currentIndex < this.spanObject.cumLength + this.spanObject.chars.length &&
                        this.currentIndex >= this.spanObject.cumLength,
        typed: this.currentIndex >= this.spanObject.cumLength + this.spanObject.chars.length,
        space: this.spanObject.chars === ' '}
    }
  }
}
</script>

<style lang="scss">
  span.active {
    color: #ff0000;
    background-color: #e6e6e6;
  }

  span.typed {
    color: #999999;
  }

  span.space {
    display: inline-block;
    width: 10px;
    height: 20px;
  }
</style>
