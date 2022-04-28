<template>
<div>
  <add-posting/>
  <list-posting />
</div>  
</template>

<script>
import addPosting from '../components/addPosting.vue'
import listPosting from '../components/listPosting'

  export default {
    components: {
      listPosting,
      addPosting,
    },
  }
</script>
