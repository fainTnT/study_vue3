<template>
  <div>
    <Demo name='yyhh' :age='22' @btnClick='DemoClick'>
      <template v-slot:second>
        <span>first</span>
      </template>
      <template v-slot:first>
        <span>second</span>
      </template>
    </Demo>
  </div>
</template>

<script>
import Demo from './Demo.vue'
export default {
  name: 'App',
  components:{
    Demo
  },
  setup(){
    function DemoClick(value){
      console.log(value)
      alert(`父组件被触发,值为 ${value}`)
    }

    return {
      DemoClick
    }
  }
}
</script>

<style>

</style>
