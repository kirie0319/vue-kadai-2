<template>
  <div>
    <p>-ご相談内容-</p>
    <textarea :value="consultContent" @input="updateMessage"></textarea>
    <router-link to="/questionnaire">前へ戻る</router-link>
    <router-link to="/confirm">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  computed : {
    consultContent : function(){
      return this.$store.state.consultContent
    }
  },
  data() {
    return {
      txt: ''
    }
  },
  methods: {
    updateMessage(e) {
      this.$store.commit('setConsultContent', e.target.value)
    }
  }
};
</script>
