<template>
<div class="input-item rounded-md overflow-hidden w-full flex flex-row my-1">
  <label class="bg-gray-dark py-1 font-bold text-white w-10 flex flex-row justify-center items-center cursor-pointer" :for="label">{{label}}</label>
  <input class="outline-none rounded-r-md w-11/12 py-1 border-2 border-gray-dark" type="text" :id="label">
</div>
</template>

<script>
export default {
  name: "AppInput",
  props:{
    label:String,
  }
}
</script>

