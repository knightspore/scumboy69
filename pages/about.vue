<template>
  <div>

    <SectionPadded>
      <div class="grid gap-6 grid-cols-1 lg:grid-cols-2">

        <!-- About Scumboy -->
        <div>
          <HeadingH1>{{pageContent.title}}</HeadingH1>
          <nuxt-image class="m-8" :src="'/img/icons/hand.png'" />
          <NuxtContent :document="pageContent" />
          <SocialLinks />
        </div>

        <!-- Press -->
        <section>
          <HeadingH2>{{pageContent.press}}</HeadingH2>
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <PressCard v-for="item in data" :pressItem="item" :key="item.id"/>
          </div>
          <nuxt-image class="m-12" :src="'/img/icons/necklace.png'" />
        </section>
      </div>
    </SectionPadded>

  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const pageContent = await $content('pages', 'about').fetch()
    const data = await $content('data').where({slug: 'press'}).fetch()
    return { pageContent, data }
  },
  computed: {
    pressItems: function () {
      return data.filter
    }
  }
}
</script>
