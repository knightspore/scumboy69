<template>
  <div>

    <!-- Banner -->
    <div>
      <ShopBanner :shopText="shopText" />
    </div>

    <div class="p-2 mx-2 md:mx-16 lg:mx-24">

      <!-- Shop, Products Section -->
      <div class="my-12">
        <ShopSection :shopText="shopText">
            <template #products>
              <div v-for="(product, i) in products" :key="product.id">
              <FeedProduct :product="product" :image="images[i]" />
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

      <IconDivider icon="head-min" />

    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, $shopify }) {
    const shopText = await $content('pages', 'shop').fetch()
    const press = await $content('press').fetch()
    const products = await $shopify.product.fetchAll()
    const images = []
    products.forEach( async (product) => {
      const resized = await $shopify.image.helpers.imageForSize(product.images[0], {maxWidth: 420, maxHeight: 350})
      images.push(resized)
    })

    return { products, images, shopText, press }
  },
  head () {
    return {
      title: this.shopText.title,
    }
  }
}
</script>
