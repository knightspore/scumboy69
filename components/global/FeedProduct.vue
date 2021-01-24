<template>
  <div>
    <NuxtLink :to="`/shop/${product.slug}`">
      <article class="grid gap-4 bg-orangered text-white hover:bg-lightpink hover:text-orangered transform translate-y-0 hover:-translate-y-1 transition-all duration-75 ease-in-out" v-if="product">

        <!-- Image -->
        <img :src="require(`~/assets/img/products/${product.image}?webp`)" :alt="product.title" class="w-full" />

        <!-- Details -->
        <div class="p-5 flex justify-between">
          <!-- Name & Date -->
          <div>
            <h2 class="font-black uppercase text-lg" v-html="product.title" />
            <p v-html="product.date" />
          </div>

          <!-- Price + Purchase -->
          <div class="h-full flex">
            <p class="m-auto text-2xl font-semibold">R{{product.price}}</p>
          </div>
        </div>

      </article>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: [
    'product'
  ],
}
</script>
