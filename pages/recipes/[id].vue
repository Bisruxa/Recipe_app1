<script setup Lang="ts">
// import { type Recipe} from "../types/types";
const { id } = useRoute().params;
const {data,error} = await useFetch(`https://dummyjson.com/recipes/${id}`)
</script>
<template>
  <div class="flex flex-col max-w-screen-lg conatiner py-20">
    <div class="flex flex-col mb-6">
      <h2 class="text-5xl mb-4 font-semibold">{{ data?.name }}</h2>
      <div class="flex gap-4 text-xl mb-6">
        <div class="flex items-center gap-1">
          <Icon name="mdi:clock-time-eight-outline" style="color:#f79f1a"/>
          <span>{{ data?.cookTimeMinutes }} minutes</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:fire" style="color:#f79f1a"/>
          <span>{{ data?.caloriesPerServing }} calories</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:star" style="color:#f79f1a"/>
          <span>{{ data?.rating}}({{ data?.reviewCount }})</span>
        </div>
      </div>
      <hr>
    </div>
    <NuxtImg :src="data?.image"
    densities="x1"
    size="xs:100vw sm:100vw md:100vw l:100vw"
    class="w-full max-h-[500px]object-cover rounded-md shadow-sm mb-12"/>

  </div>
</template>