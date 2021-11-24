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
  getters: {
    gender: state => {
      return state.gender
    },
    year: state => {
      return state.year
    },
    month: state => {
      return state.month
    },
    day: state => {
      return state.day
    },
    lifeInsurance: state => {
      return state.lifeInsurance
    },
    isHospitalized: state => {
      return state.isHospitalized
    },
    wasHospitalized: state => {
      return state.wasHospitalized
    },
    question: state => {
      return state.question
    },
    question2: state => {
      return state.question2
    },
    consultContent: state => {
      return state.consultContent
    },
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
