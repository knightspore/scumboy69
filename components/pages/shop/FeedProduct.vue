<template>
  <div>
    <article class="p-5 grid gap-4 bg-gray-900 text-white" v-if="product">

      <!-- Product Image -->
      <a :href="'/shop/' + product.slug">
        <img :src="product.image" :alt="product.title" class="w-full">
      </a>

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
}
</script>
