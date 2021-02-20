<template>
  <div>
    <NuxtLink :to="`/shop/${product.handle}`">
      <article class="grid gap-4 bg-orangered text-white hover:bg-lightpink hover:text-orangered transform translate-y-0 hover:-translate-y-1 transition-all duration-75 ease-in-out" v-if="product">

        <!-- Image -->
        <img :src="product.images[0].src + '?webp'" :alt="product.title" class="w-full" />

        <!-- Details -->
        <div class="p-5 flex items-center justify-between">
          <!-- Name & Date -->
          <div>
            <h2 class="font-black uppercase text-lg" v-html="product.title" />
          </div>

          <!-- Price + Purchase -->
          <div class="h-full flex">
            <p class="m-auto font-semibold">{{product.productType}}</p>
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
