<template>
  <nav class="py-2 w-full flex items-center justify-center gap-4">
    <NuxtLink class="font-medium uppercase opacity-75" to="/">Home</NuxtLink>
    <NuxtLink class="font-medium uppercase opacity-75" to="/shop">Shop</NuxtLink>
    <NuxtLink class="font-medium uppercase opacity-75" to="/about">About</NuxtLink>
    <NuxtLink class="font-medium uppercase opacity-75 flex items-center" to="/cart"><CartIcon /> {{ cartCount }}</NuxtLink>
  </nav>
</template>

<script>
import CartIcon from '~/assets/svg/cart.svg?inline'

export default {
  components: {
    CartIcon,
  },
  computed: {
    cartCount () {
      return this.$store.state.items.cart.length
    }
  }
}
</script>

<style>
.nuxt-link-exact-active {
  @apply font-bold opacity-100
}
</style>
