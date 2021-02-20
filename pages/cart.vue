<template>
  <div class="mx-auto max-w-2xl lg:max-w-3xl">

      <h1>Your Cart</h1>

      <!-- Cart Items -->
      <div v-if="loading">
      </div>
      <div v-else class="mt-4 grid gap-y-2">

        <!-- Cart Items -->
        <div class="p-2 font-bold bg-orangered text-white" v-for="item in userCheckout.lineItems" :key="item.variantId">
          <div class="flex items-center justify-between">
            <p class="text-xs md:text-sm lg:text-base">{{ item.title }} - {{ item.variant.title }} | R{{ item.variant.price }}</p>
            <div @click="removeFromCart">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>
        </div>

      </div>

      <!-- Checkout -->
      <div class="mt-6 text-center">
        <XyzTransition appear xyz="fade">
          <div v-if="this.userCheckout.lineItems">
            <p class="text-xl font-bold uppercase">TOTAL: R{{userCheckout.totalPrice}}</p>
            <a class="mt-4 inline-block" target="_blank" :href="userCheckout.webUrl">
              <ButtonPrimary text="Checkout"/>
            </a>
          </div>
        </XyzTransition>
      </div>

  </div>
</template>

<script>
export default {
  computed: {
    initCheckout() {
      this.loading = true;
      const items = this.$store.state.checkout.cart
      const checkout = this.$shopify.checkout.create().then(c => {
          return c
      })

      this.$shopify.checkout.addLineItems(checkout.id, items).then (cOut => {
        this.$store.commit('checkout/createCheckout', cOut)
      })

      this.userCheckout = this.$store.state.checkout.checkout
      console.log(this.userCheckout)
      this.loading = false;
    }
  },
  mounted () {
    this.initCheckout
  },
  data () {
    return {
      loading: true,
      userCheckout: ''
    }
  },
  head () {
    return {
      title: 'Your Cart'
    }
  }
}
</script>
