<template>
  <div class="relative min-h-screen antialiased text-lightblue bg-white">

    <header class="w-full">
      <div id="inner" class="m-auto">

        <!-- Title -->
        <div class="pt-8 lg:pt-6">
          <Logo />
        </div>

        <!-- Navigation -->
        <div>
          <Navigation />
        </div>

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
