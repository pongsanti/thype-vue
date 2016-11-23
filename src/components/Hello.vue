<template>
  <div>
    <section class="hero has-text-centered is-bold is-info">
      <div class="hero-head">
        <div class="container">
          <nav class="nav">
            <div class="nav-left">
              <a class="nav-item is-brand" href="#"> 
                <h1 class="title">THYPE!!</h1>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ msg }}</h1>
        </div>
      </div>
    </section>
    <br>
    <section>
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-vertical is-2">
            <article class="tile is-child notification is-danger">
              <p class="title">Stat</p>
              <p class="subtitle">Player statistics</p>
            </article>
            <nav class="panel tile is-child is-warning">
              <p class="panel-heading">History</p>
              <a class="panel-block">Match 01</a>
              <a class="panel-block">Match 02</a>
              <a class="panel-block">Match 03</a>
              <a class="panel-block">Match 04</a>
            </nav>
          </div>
          <div class="tile is-parent is-8 is-vertical">
            <div class="box tile is-child">
              <p class="title">Play area</p>
              <typee :spanArray="spanArray" :charArray="charArray"/>
            </div>
            <article class="tile is-child notification is-light">
              <p class="title">Typee Info</p>
              <p>Lorem Ipsum            </p>
            </article>
          </div>
          <div class="tile is-parent is-vertical is-2">
            <article class="tile is-child notification is-info">
              <p class="title">User profile</p>
              <p class="subtitle">Guest</p>
            </article>
            <article class="tile is-child notification is-success">
              <p class="title">Friend list</p>
              <p class="subtitle">User's friend list</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import THSARA from './config'
import {util} from './util'
import typee from './typee.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome ^_^ Let\'s thype',
      spanArray: '',
      charArray: '',
      text: 'ตอนเช้า มีบางครั้งบางคราวที่ฉันตื่นมาแล้วร้องไห้โดยไม่รู้สาเหตุ และมักจะนึกภาพความฝันไม่ออกเสมอ ฉันกำลังตามหาใครคนหนึ่ง แค่เพียงคนเดียวตลอดมา'
    }
  },
  created () {
    this.spanArray = util.spanArray(this.text)
    this.charArray = this.text.split('')
  },
  components: {
    typee
  }
}
</script>

<style scoped>

</style>
