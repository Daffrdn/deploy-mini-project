<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
      text
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
        >
          
        <v-icon>mdi mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar color="green">
                <v-icon dark>
                    mdi-account-circle
                </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Daffa</v-list-item-title>
              <v-list-item-subtitle>Test</v-list-item-subtitle>
            </v-list-item-content>

            
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
              <v-list-item>
                <v-btn text>Profile</v-btn> 
              </v-list-item>
              <v-list-item>
                <v-btn text>Setting</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn text>Logout</v-btn>
              </v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="menu = false"
          >
            Cancel
          </v-btn>
        
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }),
  }
</script>