<template>
  <div class="card" :class="{'border-success' : item.isAvailable()}">
    <div class="card-header">
      {{ item.title }}
    </div>
    <component :is="typeOfItem" :item="item"></component>
    <div class="card-footer">
      <button v-if="item.isAvailable()" @click="item.checkOut()">Check Out</button>
      <button v-else @click="item.checkIn()">Check In</button>
      <button @click="item.remove()">Remove</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "LibraryItem",
  props: {
    item: Object
  },
}
</script>

<style scoped>

</style>