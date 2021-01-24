<template>
  <div>
    <button v-html="text" class="px-4 py-3 text-sm font-black uppercase border-orangered border-4 opacity-100 hover:opacity-75 transition-opacity duration-75" />
  </div>
</template>

<script>
export default {
  props: [
    'text',
  ]
}
</script>
