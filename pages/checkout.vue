<template>
  <SectionPadded class="m-auto max-w-2xl lg:max-w-4xl text-orangered bg-white rounded-lg shadow-lg">

      <div v-if="checkout.totalPrice === '0.00'">
        <svg class="w-12 h-12 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      </div>

      <div v-if="checkout.totalPrice !== '0.00'">

        <h1>Your Cart</h1>

        <!-- Cart -->
        <div class="mt-4 grid gap-y-2">
          <!-- Cart Items -->
          <div class="p-2 " v-for="item in checkout.lineItems" :key="item.variantId">
            <div>
              <p class="text-sm font-bold md:text-sm lg:text-base flex gap-6 items-center justify-between"><span>{{item.quantity}} x {{ item.title }} - {{ item.variant.title }}</span> R{{ item.variant.price }}</p>
            </div>
          </div>
        </div>

        <!-- Checkout -->
        <div class="mt-6 text-center">
            <div>
              <p class="text-xl font-bold uppercase">{{'TOTAL: R' + checkout.totalPrice }}</p>
              <div @click="shopifyCheckout">
                  <div class="mt-4 inline-block">
                    <ButtonPrimary text="Go to Checkout"/>
                  </div>
              </div>
            </div>
        </div>

        <div class="mt-6 text-center">
          <nuxt-link to="/cart"><p class="text-xs uppercase font-bold">Back</p></nuxt-link>
        </div>

      </div>
  </SectionPadded>
</template>

<script>
export default {
  layout: 'splash',
  computed: {
    // Opens checkout in new Window & Redirect + Clear Upon Completion
    completeCheckout() {
      const url = this.$store.state.checkout.checkout.webUrl
      const w = window.open(`${url}`)

      const timer = setTimeout(() => {
        if(w.closed) {
          clearInterval(timer)
          this.$router.push('/shop')
          this.$store.commit('checkout/reset');
        }
      }, 1000)
    },
    checkout() {
      return this.$store.state.checkout.checkout
    }
  },
  methods: {
    shopifyCheckout() {
      this.completeCheckout
    },
  },
  head () {
    return {
      title: 'Your Cart'
    }
  }
}
</script>
