<template>
  <div class="p-2 mx-auto max-w-2xl lg:max-w-3xl">
    <div v-if="products == 0" class="m-4 text-center">
      <h1>Your Cart is Empty.</h1>
    </div>
    <div v-else >
          <!-- Cart -->
          <SectionPadded class="grid gap-4">
            <h1 class="text-center">Cart</h1>
            <div class="p-2 font-bold bg-orangered text-white" v-for="item in products" :key="item.id">
              <div>
              <nuxt-link class="" :to="`/shop/${item.slug}`">
                <p class="text-xs md:text-sm lg:text-base flex items-center justify-between"><span>{{ item.title }} {{ item.variant }}</span> <span>R{{ item.price }}</span></p>
              </nuxt-link>
              </div>
            </div>
          </SectionPadded>

          <div>
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
    products() {
      return this.$store.state.checkout.cartRef
    },
    createCheckout() {
      this.$store.commit('checkout/createCheckout')
    },
  },
  methods: {
    clearCart() {
      this.$store.commit('checkout/reset')
      this.cart = null
    },
  },
  mounted () {
    this.createCheckout
  },
  data () {
    return {
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
