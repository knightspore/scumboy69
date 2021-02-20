export const state = () => ({
  cart: [],
  cartRef: [],
  checkout: ""
});

export const mutations = {
  add(state, variant) {
    console.log({ state });
    state.cart.push({
      variantId: variant.v.id,
      quantity: 1
    });
    state.cartRef.push({
      title: variant.t,
      slug: variant.s,
      variant: variant.v.title,
      id: variant.v.id,
      price: variant.v.price
    });
  },
  remove(state, index) {
    state.cart.splice(state.cart.indexOf(index), 1);
  },
  createCheckout(state) {
    this.$shopify.checkout.create().then(checkout => {
      state.checkout = checkout;
    });
  },
  finalizeCheckout(state) {
    this.$shopify.checkout
      .addLineItems(state.checkout.id, state.cart)
      .then(checkout => {
        state.checkout = checkout;
      });
  },
  reset(state) {
    state.checkout = "";
    state.cart = [];
    state.cartRef = [];
  }
};
