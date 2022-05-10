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

      <!-- <div v-if="isLoggedIn">
        <v-btn
        target="_blank"
        text
        @click="logout"
      >
        Logout
      </v-btn>
      </div>

      <div v-else>
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">Login</router-link>
      </div> -->

      <menuProfile/>
  
    </v-app-bar>

    
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
  // computed : {
  //     isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
  //   },
  methods: {
    profileAcc(){
      this.$router.push('/profile')
    },
    beranda(){
      this.$router.push('/')
    }
    // async logout (){
    //     await this.$store.dispatch('LogOut')
    //     this.$router.push('/login')
    //   },
  }
};
</script>
