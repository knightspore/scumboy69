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
        <slot/>
      </div>
    </SectionPadded>

  </div>
</template>

<script>
export default {
  props: [
    'shopText'
  ]
}
</script>
