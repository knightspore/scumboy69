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
  remove(state, { variant }) {
    state.cart.splice(state.cart.indexOf(variant), 1)
  },
  createCheckout(state, checkout) {
    state.checkout = checkout;
  },
  reset(state) {
    state.checkout = '';
  }
}
