<template>
  <div>
      <Section class="grid gap-6 grid-cols-1 lg:grid-cols-2">

        <!-- About Scumboy -->
        <SectionPadded>
          <HeadingH1>{{pageContent.title}}</HeadingH1>
          <NuxtContent :document="pageContent" />
          <SocialLinks />
        </SectionPadded>


        <!-- Gold Hand Img -->
        <SectionPadded>
          <nuxt-image class="transform rotate-25 hover:rotate-12 scale-1 hover:scale-75 transition-transform duration-150 ease-in-out" :src="'/img/icons/hand.png'" />
        </SectionPadded>

        <divider/>

        <!-- Press -->
        <SectionPadded>
          <HeadingH2>{{pageContent.subtitle}}</HeadingH2>
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <PressCard v-for="item in data" :pressItem="item" :key="item.id"/>
          </div>
        </SectionPadded>

      </Section>
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
  },
  head () {
    return {
      title: 'About Scummy, Press and Media'
    }
  }
}
</script>
