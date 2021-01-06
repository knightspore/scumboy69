<template>
  <div>

    <!-- About Scumboy -->
    <SectionPadded>
      <HeadingH1>{{aboutText.title}}</HeadingH1>
      <NuxtContent :document="aboutText" />
      <div>
        <SocialLinks />
      </div>
    </SectionPadded>

  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const aboutText = await $content('pages', 'about').fetch()
    return { aboutText }
  }
}
</script>
