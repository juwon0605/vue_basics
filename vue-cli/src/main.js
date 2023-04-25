import Vue from "vue";
import App from "./App.vue";

// var App = {
//   template: "<div>app</div>",
// };

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

//render는 components와 같은 역할: Vue 객체에 컴포넌트들을 등록하는 역할
// new Vue({
//   components: {
//     app: App,
//   },
// });

//mount는 el과 같은 역할: HTML과 Vue 객체 연동
// new Vue({
//   el: "#app",
// });
