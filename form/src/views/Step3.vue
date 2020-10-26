<template>
  <div class="step3 message">
    <div class="message-header has-background-primary">
      <span class="tag is-info">STEP3</span>
      <div class="header">
        <span class="icon">
          <i class="fa fa-file-alt"></i>
        </span>
        <span>ご相談内容をご記入ください</span>
      </div>
    </div>
    <div class="message-body">
      <div class="control">
        <p class="has-text-info">-ご相談内容-</p>
        <textarea class="textarea" style="height:300px" v-model="consultation"></textarea>
      </div>
    </div>
    <div class="message-footer">
      <button class="button is-primary is-medium">
        <router-link to="step2">
          <span class="icon">
            <i class="fa fa-angle-left"></i>
          </span>
          <span>前へ戻る</span>
        </router-link>
      </button>
      <button class="button is-primary is-medium">
        <!-- <router-link to="step4"> -->
          <span>次へ進む</span>
          <span class="icon">
            <i class="fa fa-angle-right"></i>
          </span>
        <!-- </router-link> -->
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Step3',
  // components: {
  //   HelloWorld
  // },
  computed: {
    consultation: {
      get () {
        return this.$store.state.consultation
      },
      set (value) {
        this.$store.commit('updateConsultation', value)
      }
    }
  },
  methods:{
    updateConsultation (e) {
      this.$store.commit('updateConsultation', e.target.value)
    }
  }
}
</script>