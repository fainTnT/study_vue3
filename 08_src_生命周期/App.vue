<template>
  <div></div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "App",
  setup() {
    // 区别:vue2在created之后再判断是否挂载了dom来进行下一步
    //      vue3在beforeCreated之前就判断
    //      vue3改变了卸载的名字

    // 生命周期api形式 写在setup里面 需要引入
    // beforeCreate created相当于setup
    onBeforeMount(() => {

    });
    onMounted(() => {

    });
    onBeforeUpdate(() => {

    });
    onUpdated(() => {

    });
    onBeforeUnmount(() => {

    });
    onUnmounted(() => {

    });
  },
  // 写外面 不需要引入
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeUnmount() {

  },
  unmounted() {

  },
};
</script>

<style>
</style>
