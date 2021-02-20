<template>
  <div>
    <NuxtLink :to="`/shop/${product.handle}`">
      <article class="h-64 py-12 flex items-center justify-center transform translate-y-0 hover:-translate-y-1 transition-all duration-150 ease-in-out bg-cover bg-center"
      :style="`background-image: url('${product.images[0].src}?webp?lqip?responsive')`"
      >

        <!-- Details -->
        <div class="text-center m-auto p-4 grid bg-orangered text-white">
          <div>
            <h2 class="font-black uppercase text-lg bg-orangered" v-html="product.title" />
          </div>
          <div>
            <p class="m-auto font-semibold">R{{product.variants[0].price}}</p>
            <p class="m-auto font-bold text-sm">{{product.productType}}</p>
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
