<template>
  <div class="relative min-h-screen text-gray-900 bg-blue-100 antialiased">

    <header class="sticky top-0 w-full py-2 pb-3">
      <div id="inner" class="m-auto">
        <!-- Title -->
        <div class="p-10">
          <ScumboyLogo id="logo" class="text-blue-300 fill-current w-full h-auto" />
        </div>

        <!-- /title -->

        <!-- Navigation -->
          <Navigation />
        <!-- /navigation -->
      </div>
    </header>

    <!-- Page -->
    <main class="pt-10 pb-24">
      <Nuxt />
    </main>
    <!-- /page -->

  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import ScumboyLogo from '~/assets/svg/scumboy.svg?inline'

export default {
  components: {
    Navigation,
    ScumboyLogo
  }
}
</script>

<style>
#logo {
  animation: logo-animation 20s infinite ;
}

@keyframes logo-animation {
  0% {
    scale: 1;
    transform:  rotate3d(1, 1, 1, -2deg);
    opacity: 1;
    @apply text-blue-300;
  }
  80% {
    scale: .7;
    transform: rotate3d(1, 1, 1, 4deg);
    opacity: 1;
    @apply text-blue-300;
  }
  85% {
    opacity: 0;
  }
  95% {
    scale: 0;
    transform: rotate3d(0, 1, -1, -180deg);
    opacity: .2;
    @apply text-blue-100;

  }
}
</style>
