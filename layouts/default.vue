<template>
  <div class="relative min-h-screen antialiased text-orangered bg-white">

    <!-- Header -->
    <header class="w-full mt-12">
        <div class="max-w-2xl m-auto pt-4 lg:pt-2">
          <Logo />
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
