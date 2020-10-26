
<template>
  <div class="step1 message">
    <div class="message-header has-background-primary">
      <span class="tag column is-1 is-info">STEP1</span>
      <div class="header">
        <span class="icon">
          <i class="fa fa-address-card"></i>
        </span>
        <span>お客様の情報を入力してください</span>
      </div>
    </div>
    <div class="message-body">
      <div class="gender control">
        <p class="has-text-info">-性別-</p>
        <label class="gender">
          <input type="radio" name="gender" value="男性" v-model="gender">男性
        </label>
        <label class="gender">
          <input type="radio" name="gender" value="女性" v-model="gender">女性
        </label>
      </div>
      <div class="dateOfBirth control">
        <p class="has-text-info">-生年月日-</p>
        <label class="date-of-birth">
          <input type="date" name="date-of-birth" v-model="dateOfBirth">
        </label>
      </div>
    </div>
    <div class="message-footer">
      <button class="button is-primary is-medium">
        <router-link to="step2">
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
export default {
  name: 'Step1',
  computed: {
    gender: {
      get () {
        return this.$store.state.gender
      },
      set (value) {
        this.$store.commit('updateGender', value)
      }
    },
    dateOfBirth: {
      get () {
        return this.$store.state.dateOfBirth
      },
      set (value) {
        this.$store.commit('updateDateOfBirth', value)
      }
    }
  },
  methods:{
    updateGender (e) {
      this.$store.commit('updateGender', e.target.value)
    },
    updateDateOfBirth (e) {
      this.$store.commit('updateDateOfBirth', e.target.value)
    }
  }
}
</script>
