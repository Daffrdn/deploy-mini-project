<template>
<div>
    <v-app-bar
      app
      color="white"
    >
      <div class="d-flex align-center" color="indigo">
        <v-img
        max-width="100"
        :src="images.logo"
        @click="home"
        >
        </v-img>
      </div>

      <v-spacer></v-spacer>
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
  data: () => ({
    images: {
          logo: require('../assets/logo-fix.png'),
        }
  }),
  computed: {
    filteredList() {
      return this.post.filter(post => {
        return post.write_post.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    profileAcc(){
      this.$router.push('/profile')
    },
    beranda(){
      this.$router.push('/')
    },
    home(){
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
