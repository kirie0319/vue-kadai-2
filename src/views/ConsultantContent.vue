<template>
  <div>
    <p>-ご相談内容-</p>
    <textarea v-model="text"></textarea>
    <router-link to="/">前へ戻る</router-link>
    <router-link to="/consultantcontent">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>
