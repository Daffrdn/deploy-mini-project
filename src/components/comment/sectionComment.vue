<template>
<v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            text 
            max-width="500px"
            texet
            color="black"
            dark
            v-bind="attrs"
            v-on="on"
        >
            Comment
        </v-btn>
        </template>
        
    <v-card
    class="mx-auto mt-4 md-4"
    max-width="600"
    solo
    >
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="green">
          <v-icon dark>
              mdi-account-circle
            </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title><h3>Daffa</h3></v-list-item-title>
          <div class="text-h10"> hh </div>
        </v-list-item-content>
        <v-btn
        icon
        @click="dialog = false">
        <v-icon>mdi mdi-close</v-icon>
      </v-btn>
      </v-list-item>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-text class="text-h5 bold">
     aaaaaaaaaaa
    </v-card-text>
    
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        icon
        :class="like ? 'green--text' : ''"
        @click="like = !like">
        <v-icon>mdi mdi-thumb-up</v-icon>
      </v-btn>
      <v-btn
        text
        @click="dialog = false">
        Comment
      </v-btn>
      <v-btn
        text
        @click="a">
        <v-icon>mdi mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    </v-card>
        <v-card>
        <v-card-title>
        </v-card-title>
        <v-card-text>
            <input type="input" class="form__field" required />
            <label class="form__label"> Add ur Comment...</label>
        </v-card-text>
        <v-card-actions>
            <!-- <v-btn
            color="blue darken-1"
            text
            @click="edit_post(posts, dialog = flase)"
            >
            Confirm
            </v-btn> -->
        </v-card-actions>
        </v-card>
</v-dialog>
</template>

<script>
export default {
    data: () => ({
      dialog: false,
    }),
    
}
</script>

<style>

</style>