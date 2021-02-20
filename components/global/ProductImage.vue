<template>
  <Section class="lg:col-span-2">
    <div class="max-w-screen">
      <img v-for="(image, i) in images" :key="image.id" class="mt-4 bg-orangered" :src="`${images[i].src}?webp?sqpip`" />
    </div>
  </Section>
</template>

<script>
export default {
  props: [
    'images'
  ],
}
</script>

<style>

</style>
