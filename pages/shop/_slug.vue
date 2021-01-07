<template>
  <div class="grid lg:grid-cols-2">

    <!-- Image -->
    <SectionPadded>
        <img :src="require(`~/assets/img/products/${product.image}`)" />
    </SectionPadded>

    <!-- Product Details -->
    <SectionPadded>
      <h1 class="text-2xl lg:text-4xl uppercase font-bold">{{product.title}}</h1>
      <p class="text-xl font-extrabold">{{product.date}} | {{product.price}}</p>
      <p class="my-2 lg:w-1/2">{{product.description}}</p>
      <div class="mt-4 flex gap-4" @click="addToCart()" >
        <ButtonPrimary text="Add to Cart" :product="product" />
        <XyzTransition appear xyz="fade">
          <p v-if="added" class="mt-4 text-sm font-medium">Added to Cart</p>
        </XyzTransition>
      </div>
    </SectionPadded>


  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const product = await $content('products', params.slug).fetch()
    return { product }
  },
  methods: {
    // Add to Cart, Show Confirmation Briefly
    addToCart: function () {
      this.$store.commit('items/add', this.product)
      this.added = true
      setTimeout(() => { this.added = false }, 3000)
    },
  },
  data () {
    return {
      added: false,
    }
  },
  head () {
    return {
      title: this.product.title,
    }
  }
}
</script>
