<template>
  <h1>Demo</h1>
  <p>x:{{pointObj.x}} y:{{pointObj.y}}</p>
</template>

<script>
import usePoint from './hooks/usePoint'
export default {
  setup() {
    let pointObj = usePoint()

    return {
      pointObj
    }
  },
};
</script>

<style>
</style>