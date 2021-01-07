<template>
  <div class="relative min-h-screen antialiased text-lightblue bg-white">

    <header class="w-full">
      <div id="inner" class="m-auto">

        <!-- Title -->
        <div class="pt-6 pb-4">
          <XyzTransition appear xyz="fade duration-6">
            <nuxt-image :src="`/img/text/scumboy_gold.png`" class="w-3/5 mx-auto" alt="Scumboy Logo" />
          </XyzTransition>
        </div>

        <!-- Navigation -->
          <Navigation />

      </div>
    </header>

    <!-- Page -->
    <main class="pt-10 pb-24">
          <XyzTransition appear xyz="fade down">
          <Nuxt />
          </XyzTransition>
    </main>

  </div>
</template>

<script>
import ScumboyLogo from '~/assets/svg/scumboy.svg?inline'

export default {
  components: {
    ScumboyLogo,
  },
  data () {
    return {
      toggled: false
    }
  }
}
</script>
