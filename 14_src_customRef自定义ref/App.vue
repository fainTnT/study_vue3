<template>
  <div>
    <input type="text" v-model="keyWord" />
    <h1>{{ keyWord }}</h1>
  </div>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    let keyWord = myRef("",500);

    // 自定义ref
    function myRef(value,delay) {
      return customRef((track,trigger) => {
        let timer
        return {
          get: function () {
            console.log(`${value}被读取`)
            track(); //追踪最新的value值 并且使用这个值
            return value
          },
          set: function (newValue) {
            console.log(`${value}被修改成${newValue}`)
            value = newValue
            clearTimeout(timer)
            timer = setTimeout(()=>{
              trigger() //通知vue去重新解析模板
            },delay)
            
          },
        };
      });
    }
    return {
      keyWord,
    };
  },
};
</script>

<style>
</style>
