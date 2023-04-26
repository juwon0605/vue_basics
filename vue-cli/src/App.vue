<template>
  <div>
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  // 여러 컴포넌트간의 변수 중복 방지를 위해 매번 새로 인스턴스 생성
  data: function () {
    return {
      str: "hi",
    };
  },
  components: {
    "app-header": AppHeader,
  },
};

// 아래와 같이 동작
// new Vue({
//   data: {
//     str: "hi",
//   },
// });
</script>

<style></style>
