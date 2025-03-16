<script setup Lang="ts">
</script>
<template>
  <header class=" items-center border-b">
    <nav class="flex p-5 justify-between">
      <NuxtLink to="/" class="flex itemscenter">
        <NuxtImg width="56px" densities="" src="../public/icon-green.png" format="webp" alt=""/>
        <h1 class="font-bold text-3xl">Nuxt Recipes</h1>
      </NuxtLink>
      <ul class="flex space-x-10 capitalize font-bold">
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            About
            </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">
            Login
            </NuxtLink>
        </li>
      </ul>
    </nav>

  </header>
</template>