<template>
  <div class="w-screen h-screen flex items-center justify-center">

    <div class="m-auto text-center text-orangered">
      <h2 class="text-6xl" style="text-shadow: 4px 4px 0px #ffffff"><nuxt-link to="/shop">[SHOP]</nuxt-link></h2>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'splash',
  head () {
    return {
      title: 'WELCOME'
    }
  }
}
</script>
