<template>
  <Section class="lg:col-span-2">
    <div class="max-w-screen">
      <img v-for="(image, i) in images" :key="'image' + i" class="mt-4 bg-orangered" :src="`${images[i]}?webp?sqpip`" :alt="alt + ' Image ' + i" />
    </div>
  </Section>
</template>

<script>
export default {
  props: [
    'images',
    'alt',
  ],
}
</script>

<style>

</style>
