<template>
  <div class="step2 message">
    <div class="message-header has-background-primary">
      <span class="tag is-info">STEP2</span>
      <div class="header">
        <span class="icon">
          <i class="fa fa-chalkboard-teacher"></i>
        </span>
        <span>以下にお答えください</span>
      </div>
    </div>
    <div class="message-body">
      <div class="control">
        <p class="has-text-info">-現在、生命保険に加入されていますか？-</p>
        <label class="have-insurance">
          <input type="radio" name="have-insurance" value="はい" v-model="haveInsurance">はい
        </label>
        <label class="have-insurance">
          <input type="radio" name="have-insurance" value="いいえ" v-model="haveInsurance">いいえ
        </label>
      </div>
      <transition>
        <div class="control" v-if="haveInsurance">
          <p class="has-text-info">-現在入院中ですか？または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-</p>
          <label class="is-hospitalized">
            <input type="radio" name="is-hospitalized" value="はい" v-model="isHospitalized">はい
          </label>
          <label class="is-hospitalized">
            <input type="radio" name="is-hospitalized" value="いいえ" v-model="isHospitalized">いいえ
          </label>
        </div>
      </transition>
      <transition>
        <div class="control" v-if="isHospitalized">
          <p class="has-text-info">-過去５年以内に、病気やけがで、手術を受けたこことまたは継続して７日以上の入院をしたことがありますか？-</p>
          <label class="was-hospitalized">
            <input type="radio" name="was-hospitalized" value="はい" v-model="wasHospitalized">はい
          </label>
          <label class="was-hospitalized">
            <input type="radio" name="was-hospitalized" value="いいえ" v-model="wasHospitalized">
            いいえ
          </label>
        </div>
      </transition>
    </div>
    <div class="message-footer">
      <button class="button is-primary is-medium">
        <router-link to="step1">
          <span class="icon">
            <i class="fa fa-angle-left"></i>
          </span>
          <span>前へ戻る</span>
        </router-link>
      </button>
      <button class="button is-primary is-medium">
        <router-link to="step3">
          <span>次へ進む</span>
          <span class="icon">
            <i class="fa fa-angle-right"></i>
          </span>
        </router-link>
      </button>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Step2',
  // components: {
  //   HelloWorld
  // },
  computed: {
    haveInsurance: {
      get () {
        return this.$store.state.haveInsurance
      },
      set (value) {
        this.$store.commit('updateHaveInsurance', value)
      }
    },
    isHospitalized: {
      get () {
        return this.$store.state.isHospitalized
      },
      set (value) {
        this.$store.commit('updateIsHospitalized', value)
      }
    },
    wasHospitalized: {
      get () {
        return this.$store.state.wasHospitalized
      },
      set (value) {
        this.$store.commit('updateWasHospitalized', value)
      }
    }
  },
  methods:{
    updateHaveInsurance (e) {
      this.$store.commit('updateHaveInsurance', e.target.value)
    },
    updateIsHospitalized (e) {
      this.$store.commit('updateIsHospitalized', e.target.value)
    },
    updateWasHospitalized (e) {
      this.$store.commit('updateWasHospitalized', e.target.value)
    }
  }
}
</script>

<style>
.v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: 0.5s;
}
</style>