<template>
<div>
  <!-- Cart Details -->
  <SectionPadded v-if="cartItems.length">
    <HeadingH1>Your Cart</HeadingH1>
    <!-- Receipt -->
    <ul class="grid gap-4 border-orangered">
      <li v-for="(item, index) of cartItems" :key="item.title">
          <CartItem :item="item" v-if="item" :index="index + 1"/>
      </li>
    </ul>
    <div class="mt-6">
      <CartTotal/>
    </div>
  <ButtonPrimary text="Continue to Checkout >>" />
  </SectionPadded>

  <!-- Checkout Prompt -->
  <SectionPadded v-if="!cartItems.length">
    <HeadingH1>Your Cart is Empty.</HeadingH1>
  </SectionPadded>
</div>
</template>

<script>
export default {
  computed: {
    // List Items in Cart
    cartItems() {
      return this.$store.state.items.cart
    },
  },
  head () {
    return {
      title: 'Your Cart'
    }
  }
}
</script>
