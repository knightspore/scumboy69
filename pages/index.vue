<template>
  <div class="mx-4 md:mx-16 lg:mx-24">

    <!-- Shop, Products Section -->
    <ShopSection :shopText="shopText">
        <div v-for="product in products" :key="product.id">
        <FeedProduct :product="product" />
        </div>
    </ShopSection>

    <!-- TODO: Turn into Loading Spinner -->
    <SectionPadded class="my-12">
      <img class="mx-auto w-1/2 transform rotate-25 hover:rotate-12 scale-1 hover:scale-75 transition-transform duration-300 ease-in-out" src="~/assets/img/icons/hand.png?webp" />
    </SectionPadded>

    <!-- CTA, Press, Etc. -->
    <AboutSection :press="press" />

    <!-- Social Links -->
    <SocialLinks />

  </div>
</template>

<script>
export default {
  async asyncData({ $content, $shopify }) {
    const products = await $shopify.product.fetchAll()
    const shopText = await $content('pages', 'shop').fetch()
    const press = await $content('press').fetch()

    return { products, shopText, press }
  },
  head () {
    return {
      title: 'Art Shop',
    }
  }
}
</script>
