<template>
  <h1>{{name}}{{age}}</h1>
  <button @click='handleBtn()'>demo</button>
  <slot name='first'/>
  <slot name='second'/>

</template>

<script>
export default {
  props:{
    name:{
      type:String,
      default:''
    },
    age:{
      type:Number,
      default:0
    }
  },
  emits:['btnClick'],
  setup(props,context) {
    console.log(props,context)

    function handleBtn(){
      context.emit('btnClick','aaa')
    }

    return {
      handleBtn
    }
  },
};
</script>

<style>
</style>