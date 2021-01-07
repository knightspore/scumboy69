<template>
  <div>

      <!-- Hero & Sections -->
      <SectionPadded class="text-center" >
        <HeadingH1 class="text-6xl">Welcome to the World of Scum</HeadingH1>
        <Section class="mb-8 grid gap-4 md:gap-8 lg:grid-cols-2">
          <SectionCard text="Portfolio, Projects &amp; Client Work" asset="gif/forest.gif" link="gallery"/>
          <SectionCardAlt text="Online Art Shop - Prints &amp; Clothing" asset="gif/clothing.gif" link="shop" />
          <SectionCard text="Who is Scumboy?" asset="gif/texturepeople.gif" link="about"/>
          <SectionCardAlt text="Business Enquiries" asset="gif/eye.gif" link="contact" />
        </Section>
      </SectionPadded>

      <!-- Social Links -->
      <SectionPadded>
        <SocialLinks />
      </SectionPadded>

  </div>
</template>

<script>
export default {
  head () {
    return {
      title: "Home",
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  }
}
</script>
