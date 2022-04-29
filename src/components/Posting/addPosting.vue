<template>
  <v-card
    class="mx-auto mt-4 md-4"
    max-width="600"
    solo>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="green">
          <v-icon dark>
              mdi-account-circle
            </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title><h3>Daffa</h3></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
      <v-divider></v-divider>
    <v-card-text >
        <v-textarea
          label="Add you'r posting.."
          auto-grow
          outlined
          rows="1"
          row-height="15"
        ></v-textarea>
        <v-divider></v-divider>
        <v-card-actions>
        <v-btn
        color="green"
        dark
        text
        >
        Add Post
        </v-btn>
        <v-btn
        color="black"
        dark
        text
        >
        Add foto
        </v-btn>
    </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      
    }),
  }
</script>
