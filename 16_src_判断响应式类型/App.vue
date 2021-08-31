<template>
  <div class='app'>
  </div>
</template>

<script>
import {ref,reactive,readonly,isRef,isReactive,isProxy,isReadonly} from "vue";
export default {
  name: "App",
  setup() {
    let obj = reactive({
      name:'aaa'
    })

    let sum = ref(123)

    let obj2 = ref({
      name:'bbb'
    })

    let obj3 = readonly(obj2.value)

    console.log(isRef(obj),isRef(sum),isRef(obj2))
    console.log(isReactive(obj),isReactive(obj2.value),isReactive(obj3))
    console.log(isProxy(obj),isProxy(obj2.value),isProxy(obj3),isProxy(sum))
    console.log(isReadonly(obj2.value),isReadonly(obj3))
  },
};
</script>

<style>

</style>
