<template>
<div>
  <default-navbar/>
    <add-posting/>
    <list-posting />
  <default-footer/>
</div>  
</template>

<script>
import addPosting from '../components/Posting/addPosting.vue'
import listPosting from '../components/Posting/listPosting'
import DefaultFooter from '../layouts/defaultFooter.vue'
import DefaultNavbar from '../layouts/defaultNavbar.vue'

  export default {
    components: {
      listPosting,
      addPosting,
      DefaultNavbar,
      DefaultFooter,
    },
  }
</script>
