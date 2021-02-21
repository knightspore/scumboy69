<template>
<div class="w-screen h-screen bg-cover bg-center flex items-center justify-center" :style="`background-image: url('${require(`~/assets/gif/${bg}.gif?webp`)}')`">
  <Nuxt />
</div>
</template>

<script>
export default {
  computed: {
    bg() {
      return this.background
    }
  },
  created() {
    this.$nuxt.$on('changeBg', newBg => {
      this.background = newBg;
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('changeBg')
  },
  data () {
    return {
      background: 'forest'
    }
  }
}
</script>
