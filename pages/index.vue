<script setup Lang="ts">
//import { type RecipeResponse } from "../types/types";
// in order to define another layout other than the defult we use 
// definePageMeta({
//   layout:"login"
// })

const { data,error}=await useAsyncData('recipes',()=>$fetch('https://dummyjson.com/recipes?limit=12'));
</script>
<template>
  <main>
  <section class="bg-[#f1f1f1]">
    <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
      <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
        <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
          Master the kitchen with ease:unleash your inner chef today!
        </h1>
        <p class="text-xl lg:text-2xl mb-8 text-balance">
          Discover recepie helping you to find the asiest way to cook.
        </p>
        <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
          Browse Recepies
        </button>
        
      </div>
      <div class="flex-1 order-1 lg:order-2">
          <NuxtImg sizes="xs:100vw sm:667px " format="webp"  src="../public/nuxt-course-hero.png" densities="x1" alt=""/>
        </div>
    </div>

  </section>
  <section class="py-20 container">
    <h2 class="text-3xl lg:text-5xl mb-2">Discover,Create,Share</h2>
    <p class="text-lg lg:text-xl mb-8">Check out our most popular recepies</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      <div v-for="recipe in data?.recipes" class="flex flex-col shadow rounded-md" v-bind:key="recipe">
        <NuxtImg 
        :src="recipe.image" 
        alt=""
        sizes="xs:100vw sm:50vw lg:400px"
        format="webp"
        densities="x1"
        class="rounded-t-md"/>

        <div class="flex flex-col py-6 px-4 flex-1">
          <p class="text-xl lg:text-2xl font-semibold mb-2">Reciepe Name</p>
          <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
            <div class="flex items-center gap-1">
              <Icon name="mdi:clock-time-eight-outline" style="color:#f79f1a"/>
              <span>{{ recipe.cookTimeMinutes }}</span>
            </div>
            <div class="flex items-center gap-1">
              <Icon name="mdi:fire" style="color:#f79f1a"/>
              <span>{{ recipe.caloriesPerServing }}</span>
            </div>
            <div class="flex items-center gap-1">
              <Icon name="mdi:star" style="color:#f79f1a"/>
              <span>{{ recipe.rating}}({{ recipe.reviewCount }})</span>
            </div>
          </div>
          <NuxtLink 
          :to="`/recipes/${recipe.id}`"
          class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-base lg:text-lg  cursor-pointer">View</NuxtLink>
        </div>
      </div>
    </div>

  </section>

  </main>
</template>