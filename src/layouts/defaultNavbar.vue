<template>
<div>
    <v-app-bar
      app
      color="white"
    >
      <div class="d-flex align-center" color="indigo">
        Title logo
      </div>

      <v-spacer></v-spacer>
          <v-text-field
            label="Search Post"
            class="mt-7"
            dense
            outlined
          ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        target="_blank"
        text
        @click="profileAcc"
      >
        <v-icon>mdi mdi-account-circle</v-icon>
      </v-btn>
      <v-btn
        target="_blank"
        text
        @click="beranda"
      >
        <v-icon>mdi mdi-home</v-icon>
      </v-btn>
      
      <menuProfile/>
  
    </v-app-bar>

    

    <!-- <v-footer
    dark
    padless
    class="mt-4">
    <v-card
      class="flex green"
      flat
      tile>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Mini Project - Social Media</strong>
      </v-card-text>
    </v-card>
  </v-footer> -->
</div>
</template>

<script>
import menuProfile from '../components/Profile/menuProfile.vue'

export default {
  components: {
      menuProfile
    },
  data: () => ({
  }),
  methods: {
    profileAcc(){
      this.$router.push('/profile')
    },
    beranda(){
      this.$router.push('/')
    }
  }
};
</script>
