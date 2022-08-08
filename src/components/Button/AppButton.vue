<template>
<button :class="`px-6 bg-white py-1 rounded-md cursor-pointer border-2 border-gray-dark ${width}`" @click="$emit('onClick')">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "AppButton",
  props:{
    width:String
  }
}
</script>
