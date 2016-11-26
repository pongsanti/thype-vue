<template>
  <div>
    <div class="box current-character">
      {{displayCurrentChar}}    
    </div>
    <p>
      <typee-character v-for="obj in spanArray" :spanObject="obj" :currentIndex="currentIndex"/>
    </p>
    <p v-show="isPlay" class="control box">
      <input ref="typeeInput" autofocus @keydown.prevent="keyDown" class="input is-primary" type="text" placeholder="Type here!">
    </p>
    <div v-show="isEnd" class="notification">
    asdf
    </div>
  </div>
</template>

<script>
import typeeCharacter from './typee-character.vue'

export default {
  name: 'typee',
  data () {
    return {
      currentIndex: 0,
      state: 0
    }
  },
  props: {
    spanArray: Array,
    charArray: Array
  },
  computed: {
    isEnd () {
      return this.state === 2
    },
    isPlay() {
      return this.state === 0
    },
    lastKey () {
      return this.currentIndex === (this.charArray.length)
    },
    currentChar () {
      return this.charArray[this.currentIndex]
    },
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
        this.currentIndex++
        //let curIndex = this.currentIndex + 1
        //this.currentChar = this.charArray[curIndex]
        //this.currentIndex = curIndex

        if (event.key === ' ') {
          this.clearInput()
        } else {
          this.$refs.typeeInput.value += event.key
        }

        if (this.lastKey) {
          this.clearInput()
          this.state = 2
        }
      }
    },
    clearInput () {
      this.$refs.typeeInput.value = ''
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
