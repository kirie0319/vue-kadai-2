<template>
  <div>
    <form id="selectDate">
      <p>
        -性別-<br />
        <input type="radio" name="gender" value="male" v-model="gender" /> 男性
        <input type="radio" name="gender" value="female" v-model="gender" /> 女性
      </p>
      <select v-model="year" @change="getDays">
        <option v-for="n in 50" :key="n" :value="n + 1980">
          {{ n + 1980 }}
        </option> </select
      >年
      <select v-model="month" @change="getDays">
        <option v-for="n in 12" :key="n" :value="n">
          {{ n }}
        </option> </select
      >月
      <select v-model="day">
        <option v-for="n in daysMax" :key="n" :value="n">
          {{ n }}
        </option> </select
      >日
    </form>
    <router-link to="/questionnaire">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysMax: "",
    };
  },
  computed : {
    gender : {
      get() {
        return this.$store.getters.gender;
      },
      set(value) {
        this.$store.commit("setGender", value)
      }
    },
    year : {
      get() {
        return this.$store.getters.year;
      },
      set(value) {
        this.$store.commit("setYear", value)
      }
    },
    month : {
      get() {
        return this.$store.getters.month;
      },
      set(value) {
        this.$store.commit("setMonth", value)
      }
    },
    day : {
      get() {
        return this.$store.getters.day;
      },
      set(value) {
        this.$store.commit("setDay", value)
      }
    }
  },
  created: function() {
    this.getDays();
  },
  methods: {
    // 日の最大数を取得
    getDays: function() {
      this.daysMax = new Date(this.year, this.month, 0).getDate();
    },
  },
};
</script>
