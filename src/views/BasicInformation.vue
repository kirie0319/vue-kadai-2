<template>
  <div>
    <form id="selectDate">
      <p>
        -性別-<br />
        <input type="radio" name="gender" value="男性" /> 男性
        <input type="radio" name="gender" value="女性" /> 女性
      </p>
      <select v-model="year" @change="get_days">
        <option v-for="n in 50" :key="n" :value="n + 1980">
          {{ n + 1980 }}
        </option> </select
      >年
      <select v-model="month" @change="get_days">
        <option v-for="n in 12" :key="n" :value="n">
          {{ n }}
        </option> </select
      >月
      <select v-model="day">
        <option v-for="n in days_max" :key="n" :value="n">
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
      year: 2018,
      month: 1,
      day: 1,
      days_max: "",
    };
  },
  created: function() {
    this.get_days();
  },
  methods: {
    // 日の最大数を取得
    get_days: function() {
      this.days_max = new Date(this.year, this.month, 0).getDate();
    },
  },
};
</script>
