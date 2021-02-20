<template>
<div>
  <section class="grid sm:grid-cols-3 text-left bg-orangered text-white">

    <!-- Image -->
    <div class="col-span-2">
        <img v-if="asset" class="opacity-100 hover:opacity-75 transition-all duration-75"
        :src="require(`~/assets/${asset}?webp`)"
        :alt="text + ' cover image.'" />
    </div>

    <!-- Text -->
    <div class="p-8 flex col-span-1">
      <div class="m-auto">

      <h2>{{ text }}</h2>
      <p>oliver@scumboy.co.za</p>
      </div>
    </div>

  </section>
</div>
</template>

<script>
export default {
  props: [
    'text',
    'asset',
    'link',
  ]
}
</script>
