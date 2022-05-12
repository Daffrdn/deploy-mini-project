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
      <div v-if="!$auth.isAuthenticated"></div>
      <div v-if="$auth.isAuthenticated">
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
      </div>

      <div v-if="!$auth.loading">
        <!-- show login when not authenticated -->
        <!-- <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"
          ><strong> Sign in </strong></a
        > -->
      <v-btn
        v-if="!$auth.isAuthenticated"
        text
        @click="login"
      >
        Log In
      </v-btn>
        <!-- show logout when authenticated -->
      <v-btn
        v-if="$auth.isAuthenticated"
        text
        @click="logout"
      >
        Log Out
      </v-btn>

      </div>
  
    </v-app-bar>

    
</div>
</template>

<script>

export default {
  components: {
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
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
    // async logout (){
    //     await this.$store.dispatch('LogOut')
    //     this.$router.push('/login')
    //   },
  }
};
</script>
