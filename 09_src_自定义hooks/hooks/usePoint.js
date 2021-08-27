import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function(){
  let obj = reactive({
    x:0,
    y:0
  })
  function savePoint(event){
    console.log(event)
    obj.x = event.clientX;
    obj.y = event.clientY;
  }

  onMounted(()=>{
    window.addEventListener('click',savePoint)
  })

  onBeforeUnmount(()=>{
    window.removeEventListener('click',savePoint)
  })

  return obj;
}