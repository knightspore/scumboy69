<template>
  <div class="mx-auto max-w-2xl lg:max-w-3xl">
    <div>
          <h1>{{ cart ? 'Cart' : 'Your Cart is Empty' }}</h1>

          <!-- Cart -->
          <div class="grid gap-4">
            <div class="p-2 font-bold bg-orangered text-white" v-for="item in cart" :key="item.id">
              <div class="flex items-center justify-between">
              <nuxt-link :to="`/shop/${item.slug}`">
                <p class="text-xs md:text-sm lg:text-base">{{ item.title }} {{ item.variant }} | R{{ item.price }}</p>
              </nuxt-link>
              </div>
            </div>
          </div>

          <!-- Checkout -->
          <div v-if="cart" class="p-4 text-center">
            <nuxt-link to="/checkout">
              <ButtonPrimary text="Buy this Art"/>
            </nuxt-link>
          </div>

          <!-- Clear Cart -->
          <div v-if="cart" @click="clearCart" class="text-right mt-4">
            <p class="font-black text-sm">Clear Cart</p>
          </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clearCart() {
      this.$store.commit('checkout/reset')
      this.cart = ''
    },
    getCart() {
      this.loading = true
      const cartRef = this.$store.state.checkout.cartRef
      this.cart = cartRef
      console.log(cartRef)
      this.loading = false
    }
  },
  mounted () {
    this.cart = this.$store.state.checkout.cartRef
  },
  data () {
    return {
      cart: '',
      loading: true,
    }
  },
  head () {
    return {
      title: 'Cart'
    }
  }
}
</script>
