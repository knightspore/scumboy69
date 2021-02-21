<template>
  <div>
    <XyzTransition appear xyz="fade duration-6">
      <img :src="require(`~/assets/img/text/scumboy_${color}.png?resize&size=600&format=webp`)" class="w-5/6 md:w-3/5 mx-auto" alt="Scumboy Logo Gold" />
    </XyzTransition>
  </div>
</template>

<script>
export default {
  computed: {
    color() {
      const selectedColor = this.choices[this.randomColor]
      return selectedColor
    }
  },
  data () {
    return {
      choices: ['gold', 'onyx', 'silver'],
      randomColor: Math.floor(Math.random() * Math.floor(3)),
    }
  }
}
</script>
