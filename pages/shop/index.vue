<template>
  <div>
    <!-- Store Info -->
    <SectionPadded>
      <HeadingH1>{{shopText.title}}</HeadingH1>
      <NuxtContent :document="shopText" />
    </SectionPadded>
    <!-- Product List -->
    <SectionPadded>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FeedProduct v-for="product in products" :key="product.slug" :product="product" />
      </div>
    </SectionPadded>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const shopText = await $content('pages', 'shop').fetch()
    const products = await $content('products').fetch()
    return { shopText, products }
  },
  head() {
    return {
      title: this.shopText.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.shopText.content,
        }
      ]
    }
  }
}
</script>
