<template>
  <div>
    <form>
      <p>
        現在、生命保険に加入されていますか？<br />
        <input type="radio" @click="nextQuestion" name="q1" value="はい" /> はい
        <input type="radio" @click="nextQuestion" name="q1" value="いいえ" />
        いいえ
      </p>
      <p v-if="question">
        現在入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？<br />
        <input type="radio" @click="nextQuestion2" name="q2" value="はい" />
        はい
        <input type="radio" @click="nextQuestion2" name="q2" value="いいえ" />
        いいえ
      </p>
      <p v-if="question2">
        過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？<br />
        <input type="radio" name="q3" value="はい" /> はい
        <input type="radio" name="q3" value="いいえ" /> いいえ
      </p>
      <router-link to="/">前へ戻る</router-link>
      <router-link to="/consultantcontent">次へ進む</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: false,
      question2: false,
    };
  },
  methods: {
    nextQuestion() {
      this.question = true;
    },
    nextQuestion2() {
      this.question2 = true;
    },
  },
};
</script>
