<template>
  <div class="card-columns">
    herro
<!--    <library-item v-for="item in library" :item="item"></library-item>-->
  </div>
</template>

<script>
import LibraryCollection from "@/models/LibraryCollection";
import {Book,Movie} from "@/models/LibraryItems";

export default {
  name: "UniversalLibrary",
  data() {

    return {
      //library: LibraryCollectionDecorator([])
      // or
      library: LibraryCollection()
          .addItem(new Book('Seductive Interaction Design', 234))
          .addItem(new Book('Learn Vue', 234))
          .addItem(new Movie('The Muppets', 107))
          .addItem(new Movie('Strange Brew', 97)),
      //basket: new LibraryCollection(),
    }
  },

}
</script>

<style scoped>

</style>