<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
    dark
    padless
    class="mt-5">
    <v-card
      class="flex green"
      flat
      tile>
      <v-card-actions>
        </v-card-actions>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Mini Project - Social Media</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
};
</script>
