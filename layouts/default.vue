<template>
  <div class="relative min-h-screen antialiased text-orangered bg-white">

    <!-- Header -->
    <header class="w-full mt-12">
        <div class="max-w-2xl m-auto pt-4 lg:pt-2">
          <Logo />
        </div>
        <nav>
          <ul class="flex gap-4 items-center justify-center font-bold">
            <li><nuxt-link to="/shop">SHOP</nuxt-link></li>
            <Cart />
          </ul>
        </nav>
    </header>

    <!-- Page -->
    <main class="px-4 pt-10 pb-24">
          <XyzTransition xyz="fade down ease-in-out">
          <Nuxt />
          </XyzTransition>
    </main>

  </div>
</template>

<style>

@layer base {
  h1 {
    @apply mb-2 uppercase font-extrabold text-3xl;
  }

  h2 {
    @apply mb-2 uppercase font-bold text-2xl;
  }

  h3 {
    @apply mb-2 uppercase font-bold text-lg;
  }
}

</style>
