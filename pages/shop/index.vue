<template>
  <div>

    <!-- Banner -->
    <div v-if="shopText.bannerTitle">
      <ShopBanner>
        <h1 v-html="shopText.bannerTitle" />
        <h2 v-html="shopText.bannerSubtitle" />
        <div class="mt-6">
          <nuxt-link :to="`/shop/${shopText.bannerLink}`">
            <ButtonSecondary :text="shopText.bannerButtonText" />
          </nuxt-link>
        </div>
      </ShopBanner>
    </div>

    <div class="p-2 mx-2 md:mx-16 lg:mx-24">

      <!-- Shop, Products Section -->
      <div class="my-12">
        <ShopSection :shopText="shopText">
            <template #products>
              <div v-for="product in products" :key="product.id">
              <FeedProduct :product="product" />
              </div>
            </template>
        </ShopSection>
      </div>

      <!-- TODO: Turn into Loading Spinner -->
      <SectionPadded class="my-12">
        <img class="mx-auto w-1/2 lg:w-1/3 transform rotate-25 hover:rotate-12 scale-1 hover:scale-75 transition-transform duration-300 ease-in-out" src="~/assets/img/icons/hand.png?webp" />
      </SectionPadded>

      <!-- CTA, Press, Etc. -->
      <AboutSection :press="press" />

      <!-- Social Links -->

    </div>
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
      title: this.shopText.title,
    }
  }
}
</script>
