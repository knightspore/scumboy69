<template>
  <div class="antialiased min-h-screen text-gray-900">

    <div class="my-6">
      <!-- Title -->
        <h1 class="text-3xl lg:text-6xl text-center font-black"><em>SCUMBOY69</em></h1>
      <!-- /title -->

      <!-- Navigation -->
        <Navigation/>
      <!-- /navigation -->
    </div>

    <!-- Page -->
    <main>
      <Nuxt />
    </main>
    <!-- /page -->

  </div>
</template>

<script>
import Navigation from '~/components/Navigation'

export default {
  components: {
    Navigation,
  }
}
</script>
