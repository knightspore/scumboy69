export default function ({store, redirect}) {
  let total = store.state.checkout.checkout.totalPrice
  if ( total === '0.00' || !total ) {
    return redirect('/cart')
  }
}
