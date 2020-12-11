<template>
  <nav class="py-2 w-full flex items-center justify-center gap-4">
    <NuxtLink class="text-sm font-medium uppercase text-gray-600" to="/">Gallery</NuxtLink>
    <NuxtLink class="text-sm font-medium uppercase text-gray-600" to="/shop">Shop</NuxtLink>
    <NuxtLink class="text-sm font-medium uppercase text-gray-600" to="/about">About</NuxtLink>
  </nav>
</template>

<style scoped>
.nuxt-link {
  @apply transition-all duration-150
}

.nuxt-link-exact-active {
  @apply font-bold text-gray-900
}
</style>
