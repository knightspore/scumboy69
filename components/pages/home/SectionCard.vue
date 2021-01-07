<template>
<div>
  <section class="grid sm:grid-cols-3 bg-lightblue text-white">

    <!-- Text -->
    <div class="p-8 flex col-span-1">
        <HeadingH2 class="m-auto">{{ text }}</HeadingH2>
    </div>

    <!-- Image -->
    <div class="col-span-2">
      <nuxt-link v-if="link" :to="`/${link}`">
        <img v-if="asset" class="opacity-100 hover:opacity-75 transition-all duration-75"
          :src="require(`~/assets/${asset}`)"
          :alt="text + ' cover image.'"
        />
      </nuxt-link>
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
