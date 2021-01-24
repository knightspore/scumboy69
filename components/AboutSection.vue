<template>
<div>

  <!-- CTA -->
  <SectionPadded class="text-center" >
      <SectionCardAlt text="Business Enquiries" asset="gif/forest.gif" link="contact" />
  </SectionPadded>

  <!-- Press -->
  <SectionPadded>
    <HeadingH2>Scum in the Press</HeadingH2>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <PressCard v-for="item in data" :pressItem="item" :key="item.id"/>
    </div>
  </SectionPadded>

</div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const data = await $content('press').where({slug: 'press'}).fetch()
    return { data }
  },
}
</script>
