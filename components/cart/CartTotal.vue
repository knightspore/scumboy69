<template>
<div>
      <HeadingH2>Total <span class="text-4xl">R{{ cartTotal }}</span></HeadingH2>
</div>
</template>

<script>
export default {
  computed: {
    // Calculate Total in Cart
    cartTotal() {
      const cart = this.$store.state.items.cart
      let total = 0

      for (let i = 0; i < cart.length;i++) {
        total += cart[i].price
        console.log(cart[i].price, total)
      }

      return total
    }
  }
}
</script>
