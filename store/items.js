export const state = () => ({
  cart: []
})

export const mutations = {

  // Add to Cart
  add(state, product) {
    state.cart.push(product)
    // Remove after this line
    state.cart.push(product)
    state.cart.push(product)
    state.cart.push(product)
    state.cart.push(product)
    localStorage.setItem('cart', state.cart)
  },

  // Remove from Cart
  remove(state, product) {
    state.cart.splice(state.cart.indexOf(product), 1)
  },
}
