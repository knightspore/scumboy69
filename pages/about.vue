<template>
  <div>

    <!-- About Scumboy -->
    <SectionPadded>
      <HeadingH1>{{pageContent.title}}</HeadingH1>
      <NuxtContent :document="pageContent" />
      <div>
        <SocialLinks />
      </div>
    </SectionPadded>

    <SectionPadded>
      <div class="grid grid-cols-1 lg:grid-cols-2">
      <!-- Press -->
        <section>
        <HeadingH2>{{pageContent.press}}</HeadingH2>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <PressCard v-for="item in data" :pressItem="item" :key="item.id"/>
        </div>
        </section>
        <!--  -->
        <section>
        </section>
        <section>

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
