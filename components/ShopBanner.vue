<template>
<div>
  <div class="text-center bg-orangered bg-cover bg-top" :style="`background-image: url('${require('~/assets/img/gallery/nikehead.jpg?webp')};`">
  <div class="py-24 px-8 text-center text-white bg-gray-900 bg-opacity-50">
    <slot/>
  </div>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'bannerImage'
  ]
}
</script>
