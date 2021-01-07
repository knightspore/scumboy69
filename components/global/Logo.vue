<template>
<div @click="changeLogoColor">
  <XyzTransition appear xyz="fade duration-6">
    <img v-if="highlight" src="~/assets/img/text/scumboy_black.png" class="w-5/6 md:w-3/5 mx-auto" alt="Scumboy Logo Black" />
    <img v-if="!highlight" src="~/assets/img/text/scumboy_gold.png" class="w-5/6 md:w-3/5 mx-auto" alt="Scumboy Logo Gold" />
  </XyzTransition>
</div>
</template>

<script>
export default {
  data () {
    return {
      highlight: false,
    }
  },
  methods: {
    changeLogoColor () {
      this.highlight = !this.hightlight
    }
  }

}
</script>
