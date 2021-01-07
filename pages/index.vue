<template>
  <div>

      <!-- Hero -->
      <SectionPadded class="h-48 bg-fixed flex bg-cover bg-bottom" style="background-image: url('/img/gallery/nikehead.png')">
        <HeadingH1 class="m-auto text-6xl">Welcome to the World of Scum</HeadingH1>
      </SectionPadded>

      <!-- Section Cards -->
      <SectionPadded class="grid gap-4 md:gap-8">
        <SectionCard text="Portfolio, Projects &amp; Client Work" gif="forest" link="gallery"/>
        <SectionCardAlt text="Online Art Shop - Prints &amp; Clothing" gif="clothing" link="shop" />
        <SectionCard text="Who is Scumboy?" gif="texturepeople" link="about"/>
      </SectionPadded>

  </div>
</template>

<script>
export default {
  head () {
    return {
      title: "Home"
    }
  }
}
</script>
