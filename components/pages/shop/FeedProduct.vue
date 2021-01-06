<template>
  <div>
    <article class="p-5 grid gap-4 bg-lightblue text-white" v-if="product">

      <!-- Product Image -->
      <NuxtLink :to="'shop/' + product.slug">
        <nuxt-image :placeholder="true" :src="productImage" :alt="product.title" class="w-full" />
      </NuxtLink>

      <div class="flex justify-between">
        <!-- Name & Date -->
        <div>
          <h2 class="font-black uppercase text-lg" v-html="product.title" />
          <p v-html="product.date" />
        </div>

        <!-- Price + Purchase -->
        <div>
          <p class="text-xl font-semibold">R{{product.price}}</p>
        </div>
      </div>

    </article>
  </div>
</template>

<script>
export default {
  props: [
    'product'
  ],
  computed: {
    productImage() {
      return `/img/${this.product.image}`
    }
  },
}
</script>
