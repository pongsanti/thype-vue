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
        typed: this.currentIndex >= this.spanObject.cumLength + this.spanObject.chars.length}
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
    color: #0033cc;
  }
</style>
