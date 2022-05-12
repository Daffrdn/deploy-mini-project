<template>
<div>
  <default-navbar/>
  <div v-if="!$auth.isAuthenticated" align="center" class=" mx-auto mt-5">
    <h1> You Need To Login First</h1>
    <h1> For Upload Post Thankss!!</h1>
  </div>
  <div v-if="$auth.isAuthenticated">
    <h3 align="center" class="mt-5">Welcome, {{ $auth.user.name }} </h3>
    <add-posting/>
      </div>
    <list-posting />
</div>  
</template>

<script>
import addPosting from '../components/Posting/addPosting.vue'
import listPosting from '../components/Posting/listPosting'
import DefaultNavbar from '../layouts/defaultNavbar.vue'

  export default {
    components: {
      listPosting,
      addPosting,
      DefaultNavbar,
    },
  }
</script>
