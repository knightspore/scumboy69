<template>
  <div>

    <!-- Store Info -->
    <SectionPadded>
      <div class="pb-12">
        <h1 class="font-bold text-2xl uppercase">{{shopText.title}}</h1>
        <NuxtContent :document="shopText" />
      </div>
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
