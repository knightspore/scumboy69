export const state = () => ({
  cart: []
})

export const mutations = {

  // Add to Cart
  add(state, product) {
    state.cart.push(product)
  },

  // Remove from Cart
  remove(state, product) {
    state.cart.splice(state.cart.indexOf(product), 1)
  },
}
