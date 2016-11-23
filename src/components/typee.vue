<template>
  <div>
    <p>
      <typee-character v-for="obj in spanArray" :spanObject="obj" :currentIndex="currentIndex"/>
    </p>
    <p class="control">
      <input autofocus @keydown.prevent="keyDown" class="input is-primary" type="text" placeholder="Type here!">
    </p>
  </div>
</template>

<script>
import {util} from './util'
import typeeCharacter from './typee-character.vue'

export default {
  name: 'typee',
  data () {
    return {
      currentChar: this.charArray[0],
      currentIndex: 0
    }
  },
  props: {
    spanArray: Array,
    charArray: Array
  },
  methods: {
    keyDown (event) {
      if (event.key === this.currentChar) {
        let curIndex = this.currentIndex + 1
        this.currentChar = this.charArray[curIndex]
        this.currentIndex = curIndex
      }
    }
  },
  components: {
    typeeCharacter
  }
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Taviraj');

  p {
    font-family: 'Taviraj', serif;
    font-size: 25px;
    line-height: 1.6em;
  }
</style>
