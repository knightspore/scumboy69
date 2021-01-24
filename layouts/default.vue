<template>
  <div class="relative min-h-screen antialiased text-orangered bg-white">

    <!-- Header -->
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
          <XyzTransition xyz="fade down ease-in-out">
          <Nuxt />
          </XyzTransition>
    </main>

  </div>
</template>
