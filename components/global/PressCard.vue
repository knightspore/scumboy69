<template>
  <div>
    <a target="_blank" rel="nofollow noopener noreferrer" :href="pressItem.link">
      <article class="p-2 bg-orangered text-white bg-opacity-100 hover:bg-opacity-75 transition-all duration-75">
        <h3 class="p-2">{{pressItem.title}}</h3>
        <p class="p-px text-sm mt-2 text-right">{{pressItem.blogName}} // <span class="font-bold">{{pressItem.year}}</span></p>
      </article>
    </a>
  </div>
</template>

<script>
export default {
  props: [
    'pressItem',
  ]
}
</script>
