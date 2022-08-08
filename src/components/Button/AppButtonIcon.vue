<template>
<button class="font-bold text-4xl text-gray-dark" @click="$emit('onClick')">
  <i :class="icon"></i>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "AppButtonIcon",
  props:{
    icon:String
  }
}
</script>
