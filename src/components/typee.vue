<template>
  <div>
    <span v-for="char in charArray">{{char}}</span>
  </div>
</template>

<script>
export default {
  name: 'typee',
  props: ['text'],
  computed: {
    charArray() {
      return this.text.split('')
    }
  }
}
</script>

<style scoped>

</style>
