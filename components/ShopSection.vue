<template>
  <div>

    <!-- Store Info -->
    <SectionPadded>
      <HeadingH1>Art Shop</HeadingH1>
      <NuxtContent :document="shopText" />
    </SectionPadded>

    <!-- Product List -->
    <SectionPadded>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <FeedProduct v-for="product in products" :key="product.slug" :product="product" />
      </div>
    </SectionPadded>

  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    const products = await $content('products').fetch()

    return { products }
  },
  head () {
    return {
      title: 'Art Shop',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  }
}
</script>
