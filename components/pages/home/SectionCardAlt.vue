<template>
<div>
  <section class="grid sm:grid-cols-3 bg-lightblue text-white">

    <!-- Image -->
    <div class="col-span-2">
      <nuxt-link v-if="link" :to="`/${link}`">
        <img class="opacity-100 hover:opacity-75 transition-all duration-75" :src="`/gif/${gif}.gif`" :alt="text + ' cover image.'" />
      </nuxt-link>
    </div>

    <!-- Text -->
    <div class="p-8 flex col-span-1">
      <HeadingH2 class="m-auto">{{ text }}</HeadingH2>
    </div>
  </section>
</div>
</template>

<script>
export default {
  props: [
    'text',
    'gif',
    'link',
  ]
}
</script>
