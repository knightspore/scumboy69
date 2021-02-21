<template>
<div>
  <div class="text-center bg-cover bg-top" :style="`background-image: url('${require(`~/assets/img/gallery/${shopText.bannerImage}?resize&size=1920*format=webp`)};`">
  <div class="py-24 px-8 text-center text-white bg-gray-900 bg-opacity-50">
    <h1 v-html="shopText.bannerTitle" />
    <h2 v-html="shopText.bannerSubtitle" />
    <div class="mt-6">
      <nuxt-link :to="`/shop/${shopText.bannerLink}`">
        <ButtonSecondary :text="shopText.bannerButtonText" />
      </nuxt-link>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'shopText'
  ]
}
</script>
