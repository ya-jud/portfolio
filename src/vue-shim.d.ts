declare module "*.vue" {
  import * as Vue from "vue";
  const component: ReturnType<typeof Vue.defineComponent>;
  export default component;
}