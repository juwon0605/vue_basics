<template>
  <div>
    {{ str }}
  </div>
</template>

<script>
export default {
  // 여러 컴포넌트간의 변수 중복 방지를 위해 매번 새로 인스턴스 생성
  data: function () {
    return {
      str: "hi",
    };
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
