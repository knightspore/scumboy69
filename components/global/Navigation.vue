<template>
  <nav class="py-2 w-full flex items-center justify-center gap-4">
    <NuxtLink class="font-bold uppercase opacity-75" to="/">Home</NuxtLink>
    <NuxtLink class="font-bold uppercase opacity-75" to="/shop">Shop</NuxtLink>
    <NuxtLink class="font-bold uppercase opacity-75" to="/about">About</NuxtLink>
    <NuxtLink class="font-bold uppercase opacity-75 flex items-center" to="/cart"><div v-html="require('~/assets/svg/cart.svg?include')" /> {{ cartCount }}</NuxtLink>
  </nav>
</template>

<script>

export default {
  computed: {
    cartCount () {
      return this.$store.state.items.cart.length
    }
  }
}
</script>

<style>
.nuxt-link-exact-active {
  @apply text-lightpink;
}
</style>
