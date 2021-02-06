<template>
<div>

  <!-- CTA -->
  <SectionPadded class="text-center" >
      <SectionCard text="Business Enquiries" asset="gif/forest.gif" link="contact" />
  </SectionPadded>

  <!-- Press -->
  <SectionPadded>
    <HeadingH2>Scum in the Press</HeadingH2>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <PressCard v-for="item in press" :pressItem="item" :key="item.id"/>
    </div>
  </SectionPadded>

</div>
</template>

<script>
export default {
  props: [
    'press'
  ]
}
</script>
