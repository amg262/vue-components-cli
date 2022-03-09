<template>

</template>

<script>
import {Book} from "@/models/LibraryItems";

export default {
  name: "LibraryBook",
  props: {
    item: {
      type: Book
    }
  }
}
</script>

<style scoped>

</style>