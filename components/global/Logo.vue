<template>
<div>
  <XyzTransition appear xyz="fade duration-6">
    <nuxt-image :src="logoColor" class="w-3/5 mx-auto" alt="Scumboy Logo" />
  </XyzTransition>
</div>
</template>

<script>
export default {
  computed: {
    logoColor () {
      return `/img/text/scumboy_${this.color}.png`
    }
  },
  data () {
    return {
      color: 'gold'
    }
  }

}
</script>
