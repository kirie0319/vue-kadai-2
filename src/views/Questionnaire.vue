<template>
  <div>
    <form>
      <p>
        現在、生命保険に加入されていますか？<br />
        <input type="radio" @click="nextQuestion" name="lifeInsurance" v-model="lifeInsurance" value="yes" /> はい
        <input type="radio" @click="nextQuestion" name="lifeInsurance" v-model="lifeInsurance" value="no" />
        いいえ
      </p>
      <p v-if="question">
        現在入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？<br />
        <input type="radio" @click="nextQuestion2" name="isHospitalized" v-model="isHospitalized" value="yes" />
        はい
        <input type="radio" @click="nextQuestion2" name="isHospitalized" v-model="isHospitalized" value="no" />
        いいえ
      </p>
      <p v-if="question2">
        過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？<br />
        <input type="radio" name="wasHospitalized" v-model="wasHospitalized" value="yes" /> はい
        <input type="radio" name="wasHospitalized" v-model="wasHospitalized" value="no" /> いいえ
      </p>
      <router-link to="/">前へ戻る</router-link>
      <router-link to="/consultantcontent">次へ進む</router-link>
    </form>
  </div>
</template>

<script>
export default {
   computed : {
    lifeInsurance : {
      get() {
        return this.$store.getters.lifeInsurance;
      },
      set(value) {
        this.$store.commit("setLifeInsurance", value)
      }
    },
    isHospitalized : {
      get() {
        return this.$store.getters.isHospitalized;
      },
      set(value) {
        console.log(value);
        this.$store.commit("setIsHospitalized", value)
      }
    },
    wasHospitalized : {
      get() {
        return this.$store.getters.wasHospitalized;
      },
      set(value) {
        this.$store.commit("setWasHospitalized", value)
      }
    },
    question : function(){
      return this.$store.getters.question
    },
    question2 : function(){
      return this.$store.getters.question2
    }
  },
  methods: {
    nextQuestion() {
      this.$store.commit('changeStatus', true)
    },
    nextQuestion2() {
      this.$store.commit('changeStatus2', true)
    },
  },
};
</script>
