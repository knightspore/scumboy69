<template>
  <div class="mx-auto md:max-w-4xl lg:max-w-6xl">
    <h1 class="text-2xl lg:text-4xl uppercase font-bold">{{product.title}}</h1>
    <div class="grid gap-8 lg:grid-cols-3">

      <!-- Image -->
      <ProductImage :images="product.images" />

      <!-- Product Details -->
      <Section class="lg:col-span-1">
        <p class="my-2 text-xl lg:w-1/2" v-html="product.descriptionHtml" />

        <!-- Variants -->
        <div class="mt-4 grid gap-2">
          <label for="variants" class="font-bold">Options </label>
          <select class="text-sm shadow-md rounded-sm" v-model="selectedProductTitle" name="variants" id="variants">
            <option disabled value="">Pick One</option>
            <option v-for="variant of product.variants" :key="variant.id" :value="variant.title">
              {{ variant.title }} - R{{ variant.price }}
            </option>
          </select>
        </div>

        <div class="mt-12 grid">
          <div @click="addToCart">
          <ButtonPrimary  :text="`Add <i>${selectedVariant.title}</i> to Cart`" :product="product" v-if="isVariantSelected" />
          </div>
          <div>
            <XyzTransition appear xyz="fade">
              <p v-if="added" class="p-2 mt-4 text-sm font-medium">Added to Cart</p>
            </XyzTransition>
          </div>
        </div>
      </Section>


    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isVariantSelected() {
      if (this.selectedProductTitle) {
        const title = this.selectedProductTitle
        const variant = this.product.variants.map( (v) => {
          if ( v.title === title ) {
            this.selectedVariant = v
          }
        })
        return variant
      } else {
        return null
      }
    },
    viewImage: function (x) {
      console.log(x, this.selectedImage)
      if (this.selectedImage) {
        this.selectedImage = x
        return this.selectedImage
      } else {
        this.selectedImage = 0
        return 0
      }
    }
  },
  methods: {
    addToCart() {
      const v = {
        v: this.selectedVariant,
        t: this.product.title,
        s: this.product.handle,
      }
      this.$store.commit('checkout/add', v)
      this.added = true;

      setTimeout(() => {
        this.added = false;
      }, 5000 )
    }
  },
  async asyncData ({ $shopify, params }) {
    const product = await $shopify.product.fetchByHandle(params.slug)
    return { product }
  },
  data () {
    return {
      selectedProductTitle: '',
      selectedVariant: '',
      selectedImage: '',
      added: false,
    }
  },
  head () {
    return {
      title: this.product.title,
    }
  },
}
</script>
