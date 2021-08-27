<template>
  <div>
    <button @click='isShow = false'>show</button>
    <Demo v-if='isShow'></Demo>
  </div>
</template>

<script>
import {ref} from 'vue'
import Demo from './Demo.vue'
export default {
  name: 'App',
  components:{
    Demo
  },
  setup(){
    let isShow = ref(true)

    return {
      isShow
    }
  }
}
</script>

<style>

</style>
