<template>
  <app-container>
    <div class="w-full pb-4 pt-2 px-10">
      <div class="flex flex-row justify-between mb-4">
        <div class="flex flex-row gap-7">
          <app-button-icon icon="fa-solid fa-arrows-up-down-left-right"/>
          <app-button-icon icon="fa-solid fa-rotate-right"/>
          <app-button-icon icon="fa-solid fa-magnifying-glass"/>
          <app-button-icon icon="fa-solid fa-hand"/>
          <app-button-icon icon="fa-solid fa-rug"/>
          <app-button-icon icon="fa-solid fa-floppy-disk"/>
          <app-button-icon @onClick="show = !show">{{show?'Oldinga':'Tayyor'}}</app-button-icon>
        </div>
        <div><app-select/></div>
      </div>
      <div v-if="show" class="rounded-lg overflow-hidden border-2 border-gray-dark">
        <img  class="w-full" src="../../assets/rasm_3.jpg" alt="">
      </div>
      <div v-else   class="rounded-lg overflow-hidden border-2 border-gray-dark">
        <img class="w-full" src="../../assets/rasm_2.jpg" alt="">
      </div>

    </div>
  </app-container>
</template>

<script>
import AppContainer from "@/components/Container/AppContainer";
import AppSelect from "@/components/Input/AppSelect";
import AppButtonIcon from "@/components/Button/AppButtonIcon";
export default {
  name: "MainPage",
  components: {AppButtonIcon, AppSelect, AppContainer},
  data(){
    return{
      show:false
    }
  }
}
</script>

<style scoped>

</style>