export const state = () => ({
  cart: [],
  checkout: '',
})

export const mutations = {
  add(state, variant) {
    state.cart.push({
      variantId: variant.id,
      quantity: 1,
    })
  },
  remove(state, index) {
    state.cart.splice(state.cart.indexOf(index), 1)
  },
  createCheckout(state) {
    if (state.checkout.completedAt) {
      state.cart = []
      this.reset()
    } else {
      this.$shopify.checkout.create().then(checkout => {
        state.checkout = checkout;
        this.addLineItems();
      })
    }
  },
  addLineItems(state) {
    this.$shopify.checkout.addLineItems(state.checkout.id, state.cart).then(checkout => {
      state.checkout = checkout;
    })
  },
  reset(state) {
    state.checkout = '';
  }
}
