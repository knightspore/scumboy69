<template>
  <div class="px-4 py-2 flex justify-between items-center bg-lightblue bg-opacity-25 hover:bg-opacity-50 hover:text-white transition-all duration-75">
    <div>
    <span class="mr-6 ">{{index}}</span>
    <span class="font-bold">{{item.title}}</span>
    <span>R{{item.price}}</span>
    </div>
    <button @click="removeFromCart()" class="flex">
      <div v-html="require('~/assets/svg/x.svg?include')" class="m-auto  bg-white text-lightblue rounded-full"/>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    removeFromCart: function () {
      this.$store.commit('items/remove', this.product)
    }
  },
  props: [
    'index',
    'item',
  ]
}
</script>
