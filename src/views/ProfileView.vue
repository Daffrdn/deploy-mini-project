<template>
  <div class="profile">
    <default-navbar/>
      <v-row >
        <v-col>
        <profileUser>
        </profileUser>
        </v-col>
          <v-col>
            <add-posting>
            </add-posting>
            <list-posting>
            </list-posting>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import AddPosting from '../components/Posting/addPosting.vue'
import ListPosting from '../components/Posting/listPosting.vue'
import profileUser from '../components/Profile/profileUser.vue'
import DefaultNavbar from '../layouts/defaultNavbar.vue'

export default {
  name: "ProfileView",
  components: {
    profileUser,
    ListPosting,
    AddPosting,
    DefaultNavbar,
  },
}
</script>