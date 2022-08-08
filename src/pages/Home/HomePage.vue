<template>
<div>
 <app-container>
   <div class="text-center pb-1">
     <p class="text-2xl">y=ax+by+c</p>
   </div>
   <div class="flex flex-row justify-between items-center">
     <app-button width="w-1/6">Line 001</app-button>
     <app-button width="w-1/6">Line 002</app-button>
     <app-button width="w-1/6">Line 003</app-button>
     <app-button width="w-1/6">Line 004</app-button>
     <app-button width="w-1/6">Line 005</app-button>
   </div>
   <div class="pl-10 my-2">
     <p class="text-2xl">koordinata</p>
   </div>
  <div class="flex flex-row">
    <div class="saidbar w-3/12">
     <div class="flex flex-row">
       <div class="left flex flex-row justify-center items-center">
          <p class="text-4xl px-2">1</p>
       </div>
     <div>
       <app-input label="X"/>
       <app-input label="Y"/>
       <app-input label="Z"/>
     </div>
     </div>
      <div class="flex flex-row">
        <div class="left flex flex-row justify-center items-center">
          <p class="text-4xl px-2">2</p>
        </div>
        <div>
          <app-input label="X"/>
          <app-input label="Y"/>
          <app-input label="Z"/>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="left flex flex-row justify-center items-center">
          <p class="text-4xl px-2">3</p>
        </div>
        <div>
          <app-input label="X"/>
          <app-input label="Y"/>
          <app-input label="Z"/>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="left flex flex-row justify-center items-center">
          <p class="text-4xl px-2">4</p>
        </div>
        <div>
          <app-input label="X"/>
          <app-input label="Y"/>
          <app-input label="Z"/>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="left flex flex-row justify-center items-center">
          <p class="text-4xl px-2">5</p>
        </div>
        <div>
          <app-input label="X"/>
          <app-input label="Y"/>
          <app-input label="Z"/>
        </div>
      </div>
    </div>
    <div class="w-9/12 bg-white h-full">
      <img src="../../assets/rasm_1.jpg" alt="">
    </div>  
  </div>
 </app-container>
</div>
</template>

<script>

import AppButton from "@/components/Button/AppButton";
import AppContainer from "@/components/Container/AppContainer";
import AppInput from "@/components/Input/AppInput";
export default {
  name: "HomePage",
  components: {AppContainer, AppButton, AppInput }
}
</script>

<style scoped>

</style>