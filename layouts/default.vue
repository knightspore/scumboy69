<template>
  <div class="relative min-h-screen antialiased text-orangered bg-white">

    <!-- Header -->
    <header class="w-full pt-8 lg:pt-12">
        <div class="max-w-2xl m-auto pt-4 lg:pt-2">
          <Logo />
        </div>
        <nav class="mt-6 p-1">
          <ul class="flex gap-4 items-center justify-center font-bold">
            <li><nuxt-link to="/shop">SHOP</nuxt-link></li>
            <Cart />
          </ul>
        </nav>
    </header>

    <!-- Page -->
    <main class="pt-10 pb-24">
          <XyzTransition xyz="fade down ease-in-out">
          <Nuxt />
          </XyzTransition>
    </main>


    <footer class="pt-4 pb-12">
      <SocialLinks />
    </footer>

  </div>
</template>

<style>

@layer base {
  h1 {
    @apply uppercase font-extrabold text-3xl;
  }

  h2 {
    @apply mb-2 uppercase font-bold text-2xl;
  }

  h3 {
    @apply mb-2 uppercase font-bold text-lg;
  }
}

</style>
