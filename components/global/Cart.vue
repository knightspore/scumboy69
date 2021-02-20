<template>
    <li>
    <nuxt-link to="/cart" class="flex items-center gap-2"><img class="h-6 w-6 text-white" src="~/assets/svg/cart.svg" alt="Cart Icon"> {{ cartLength }}</nuxt-link>
    </li>
</template>

<script>
export default {
  computed: {
    cartLength() {
      return this.$store.state.checkout.cart.length
    }
  }
}
</script>
