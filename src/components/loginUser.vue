<template>
<div>
  <v-card
    class="mx-auto md-4"
    max-width="500"
    elevation="10"
    solo>
    <v-card-actions >
      <v-list-item class="grow">
        <v-list-item-content>
          <v-list-item-title><h1 align="center">Log <span class="green--text">In</span></h1></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
      <v-divider></v-divider>
    <v-card-actions>
        <v-list-item class="grow">
            <v-list-item-content>
                <v-list-item-title><h1 align="center">Title <span class="green--text">Web Apps</span></h1></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-card-actions>

    <!-- <v-divider></v-divider> -->

    <v-card-text >
        <v-text-field
            label="Username Or E-mail"
            placeholder="Dense & Rounded"
            type="text"
            v-model="username"
            outlined
            rounded
            dense
          ></v-text-field>
          <v-text-field
            label="Password"
            placeholder="Dense & Rounded"
            type="password"
            v-model="password"
            outlined
            rounded
            dense
          ></v-text-field>
              
        <v-btn
        block
        color="green"
        dark
        >
        Continue
        </v-btn>

        <h2 align="center" class="mt-2 black--text">or</h2>
        <signup-user class="mt-2">
        </signup-user>
        
    </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
            Forgot Password? here 
        </v-card-text>
  </v-card>
</div>
</template>

<script>
import signupUser from '../components/signupUser.vue'

  export default {
    data: () => ({
      username: "",
      pasword: "",
    }),
    components: {
      signupUser,
    }
  }
</script>
