<template>
<div class="mt-12 text-center grid grid-cols-3 lg:grid-cols-5">
  <div class="lg:col-span-2"/>
  <div>
    <img :src="require(`~/assets/img/icons/${icon}.png?resize&size=400&format=webp`)" :alt="icon + ' icon'">
  </div>
  <div class="lg:col-span-2"/>
</div>
</template>

<script>
export default {
  props: [
    'icon'
  ]
}
</script>
