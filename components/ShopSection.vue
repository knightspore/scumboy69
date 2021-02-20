<template>
  <div>

    <!-- Store Info -->
    <SectionPadded>
      <div>
        <h1 class="font-bold text-2xl uppercase">{{shopText.title}}</h1>
        <NuxtContent class="font-medium" :document="shopText" />
        <slot name="socials" />
      </div>
    </SectionPadded>

    <!-- Product List -->
    <SectionPadded>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <slot name="products"/>
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
