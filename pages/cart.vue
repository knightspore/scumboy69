<template>
  <div class="p-2 mx-auto max-w-2xl lg:max-w-3xl">
    <div>
          <!-- Cart -->
          <SectionPadded class="grid gap-4">
            <h1 class="text-center">{{ cart ? 'Cart' : 'Your Cart is Empty' }}</h1>
            <div class="p-2 font-bold bg-orangered text-white" v-for="item in cart" :key="item.id">
              <div>
              <nuxt-link class="" :to="`/shop/${item.slug}`">
                <p class="text-xs md:text-sm lg:text-base flex items-center justify-between"><span>{{ item.title }} {{ item.variant }}</span> <span>R{{ item.price }}</span></p>
              </nuxt-link>
              </div>
            </div>
          </SectionPadded>

          <div :class="showControls">
            <!-- Checkout -->
            <div class="mt-4 p-4 text-center">
              <nuxt-link to="/checkout">
                <ButtonPrimary text="Checkout"/>
              </nuxt-link>
            </div>

            <!-- Clear Cart -->
            <div @click="clearCart" class="text-center mt-4">
              <p class="font-black text-sm">Clear Cart</p>
            </div>
          </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showControls() {
      const show = this.cart == null ? 'hidden' : 'block'
      return show
    },
    createCheckout() {
      this.$store.commit('checkout/createCheckout')
      // TODO: get these working properly
    },
  },
  methods: {
    clearCart() {
      this.$store.commit('checkout/reset')
      this.cart = null
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
    this.createCheckout
  },
  data () {
    return {
      cart: null,
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
