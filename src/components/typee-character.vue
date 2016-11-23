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
  data() {
    return {
      
    }
  },
  computed: {
    classObject () {
      return {active : this.currentIndex < this.spanObject.cumLength + this.spanObject.chars.length &&
        this.currentIndex >= this.spanObject.cumLength}
    }
  }
}
</script>

<style lang="scss">
  span.active {
    color: #660066;
    background-color: #e6e6e6;
  }
</style>
