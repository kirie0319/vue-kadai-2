<template>
  <div>
    <h1>以下の内容をご確認ください</h1>
    <div>
      <form id="selectDate">
      <p>
        -性別-<br />
        {{gender}}
      </p>
      <div>
        <h2>生年月日</h2>
        <p>{{year}}年{{month}}月{{day}}日</p>
      </div>
    </form>
    <form>
      <h2>
        現在、生命保険に加入されていますか？</h2>
        <p>
          {{lifeInsurance}}
        </p>
      <h2>
        現在入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
      </h2>
      <p>{{isHospitalized}}</p>
      <h2>
        過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</h2>
        <p>{{wasHospitalized}}</p>
    </form>
    <h2>ご相談内容</h2>
    <p>{{consultContent}}</p>
    </div>
    <router-link to="/consultantContent">前へ戻る</router-link>
    <router-link to="/">送信</router-link>
  </div>
</template>

<script>
export default {
  computed : {
    gender: function() {
      return this.$store.state.gender
    },
    year: function() {
      return this.$store.state.year
    },
    month: function() {
      return this.$store.state.month
    },
    day: function() {
      return this.$store.state.day
    },
    lifeInsurance: function() {
      return this.$store.state.lifeInsurance
    },
    isHospitalized: function() {
      return this.$store.state.isHospitalized
    },
    wasHospitalized: function() {
      return this.$store.state.wasHospitalized
    },
    consultContent: function() {
      return this.$store.state.consultContent
    },
  }
}
</script>