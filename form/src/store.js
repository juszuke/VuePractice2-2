import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    gender: '',
    dateOfBirth: '',
    haveInsurance: '',
    isHospitalized: '',
    wasHospitalized: '',
    consultation: '',
  },
  mutations: {
    updateGender (state, gender) {
      state.gender = gender
    },
    updateDateOfBirth (state, dateOfBirth) {
      state.dateOfBirth = dateOfBirth
    },
    updateHaveInsurance (state, haveInsurance) {
      state.haveInsurance = haveInsurance
    },
    updateIsHospitalized (state, isHospitalized) {
      state.isHospitalized = isHospitalized
    },
    updateWasHospitalized (state, wasHospitalized) {
      state.wasHospitalized = wasHospitalized
    },
    updateConsultation (state, consultation) {
      state.consultation = consultation
    },
  },
  actions: {
  },
  modules: {
  }
})
