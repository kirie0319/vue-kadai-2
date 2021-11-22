import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender: 'male',
    year: '2018',
    month: '1',
    day: '1',
    lifeInsurance: '',
    isHospitalized: '',
    wasHospitalized: '',
    question: false,
    question2: false,
    consultContent: ''
  },
  mutations: {
    setGender(state, gender) {
      state.gender = gender;
    },
    setYear(state, year) {
      state.year = year;
    },
    setMonth(state, month) {
      state.month = month;
    },
    setDay(state, day) {
      state.day = day;
    },
    setLifeInsurance(state, lifeInsurance) {
      state.lifeInsurance = lifeInsurance;
    },
    setIsHospitalized(state, isHospitalized) {
      state.isHospitalized = isHospitalized;
    },
    setWasHospitalized(state, wasHospitalized) {
      state.wasHospitalized = wasHospitalized;
    },

    setConsultContent(state, consultContent) {
      state.consultContent = consultContent;
    },

    changeStatus(state, question) {
      state.question = question
    },
    changeStatus2(state, question2) {
      state.question2 = question2
    }
  },
  actions: {
  },
  modules: {
  }
})
