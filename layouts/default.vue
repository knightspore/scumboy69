<template>
  <div class="relative min-h-screen antialiased text-lightblue bg-white">

    <header class="w-full">
      <div id="inner" class="m-auto">

        <!-- Title -->
        <div class="pt-10 pb-8">
          <XyzTransition appear xyz="fade up duration-6">
            <ScumboyLogo id="logo" class="w-full p-4 h-auto stroke-current hover:stroke-0 transition-color duration-300" />
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

<style>
#logo path {
  animation: animate 5s infinite ease-in;
}

@keyframes animate {
  0% {
    stroke-width: 3;
    stroke-opacity: 1;
    fill: rgba(0,0,0,0);
  }
  50% {
    stroke-width: 0;
    stroke-opacity: 0;
    fill: currentColor;
  }
  100% {
    stroke-width: 3;
    stroke-opacity: 1;
    fill: rgba(0,0,0,0);
  }
}
</style>
