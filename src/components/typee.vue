<template>
  <div>
    <p :class="typeeClass">
      <typee-character v-for="obj in spanArray" :spanObject="obj" :currentIndex="currentIndex"/>
    </p>
    <br>
    <div class="columns" v-show="isPlay">
      <div class="column">
        <div class="notification current-character has-text-centered" :class="{'is-danger': mistype}">
          {{displayCurrentChar}}
        </div>
      </div>
      <div class="column is-10">
        <p class="control box">
          <input ref="typeeInput" autofocus @keydown.prevent="keyDown" :class="inputClass" type="text" placeholder="Type here!">
        </p>
      </div>
    </div>
    <div v-show="isEnd" class="notification">
      <div class="columns">
        <div class="column is-2">
          <figure class="image is-96x96">
            <img :src="textImgUrl">
          </figure>
        </div>
        <div class="column">
          <div class="content">
            <p>
              <small>คุณเพิ่งพิมพ์ข้อความบางตอนจาก...</small>
              <br>
              <br>
              <a :href="textUrl"><strong>{{textTitle}}</strong></a>
              <br>
              <br>
              <span>{{textAuthor}}</span>
              <br>
              <br>
              <br>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {util} from './util'
import {FONTS} from './config'
import typeeCharacter from './typee-character.vue'

export default {
  name: 'typee',
  created () {
    this.$http.get('/typees').then((res) => {
      let text = res.data[0].text
      this.spanArray = util.spanArray(text)
      this.charArray = text.split('')

      this.textTitle = res.data[0].title
      this.textAuthor = res.data[0].author
      this.textUrl = res.data[0].url
      this.textImgUrl = res.data[0]['img-url']

      this.state = 0
    }, (res) => {
      console.log('Request failure.')
    })
  },
  data () {
    return {
      spanArray: [],
      charArray: [],
      textTitle: '',
      textAuthor: '',
      textUrl: '',
      textImgUrl: '',
      currentIndex: 0,
      state: 0,
      mistype: false
    }
  },
  computed: {
    typeeClass () {
      // random fonts
      let fontIndex = Math.floor((Math.random() * FONTS.length))
      return ['typee', FONTS[fontIndex]]
    },
    inputClass () {
      return {input: true, 'is-info': !this.mistype, 'is-danger': this.mistype}
    },
    isEnd () {
      return this.state === 2
    },
    isPlay () {
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
        return '< >'
      } else {
        return this.currentChar
      }
    }
  },
  methods: {
    keyDown (event) {
      if (event.key === this.currentChar) {
        this.mistype = false
        this.currentIndex++

        if (event.key === ' ') {
          this.clearInput()
        } else {
          this.$refs.typeeInput.value += event.key
        }

        if (this.lastKey) {
          this.clearInput()
          this.state = 2
        }
      } else {
        this.mistype = true
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
  @import url('https://fonts.googleapis.com/css?family=Maitree|Prompt|Taviraj');

  p.maitree {
    font-family: 'Maitree', serif;
  }

  p.prompt {
    font-family: 'Prompt', serif;
  }

  p.taviraj {
   font-family: 'Taviraj', serif; 
  }

  p.typee {
    font-size: 25px;
    line-height: 1.6em;
  }

  div.current-character {
    font-size: 40px;
  }
</style>
