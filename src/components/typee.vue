<template>
  <div>
    <div class="box current-character">
      {{displayCurrentChar}}    
    </div>
    <p>
      <typee-character v-for="obj in spanArray" :spanObject="obj" :currentIndex="currentIndex"/>
    </p>
    <p class="control box">
      <input ref="typeeInput" autofocus @keydown.prevent="keyDown" class="input is-primary" type="text" placeholder="Type here!">
    </p>
  </div>
</template>

<script>
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
  computed: {
    displayCurrentChar () {
      if (this.currentChar === ' ') {
        return '<space>'
      } else {
        return this.currentChar
      }
    }
  },
  methods: {
    keyDown (event) {
      if (event.key === this.currentChar) {
        let curIndex = this.currentIndex + 1
        this.currentChar = this.charArray[curIndex]
        this.currentIndex = curIndex

        if (event.key === ' ') {
          this.$refs.typeeInput.value = ''
        } else {
          this.$refs.typeeInput.value += event.key
        }
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

  div.current-character {
    font-size: 40px;
    font-weight: bold;
  }
</style>
