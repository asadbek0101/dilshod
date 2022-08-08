<template>
   <div>
     <app-header/>
     <router-view/>
   </div>
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";
export default {
  components: {AppHeader}
}
</script>